import { Component, OnInit, ViewChild } from '@angular/core';
import { LambdaActionService } from './services/lambda-action.service';
import { Group } from './shared/enums/groups';
import { GroupData } from './shared/models/groupData';
import { LambdacalculatorComponent } from './lambdacalculator/lambdacalculator.component';
import { ILambdaValues } from './shared/models/IlambdaValues';
import { HeaderComponent } from './header/header.component';
import { Note } from './shared/models/note';
import { NoteComponent } from './note/note.component';
import { LambdaResult } from './shared/models/lambdaResult';
import { group } from '@angular/animations';

/**
 * The app records values used to calculate Lambda and the result (Lambda, Air Fuel Ratio, Staus: Lean|Rich|Stoichiometric).
 * The values are held in an object that implements ILambdaValues. 
 * An extended object, LambdaResult, will hold the values along with the results.
 * NOTE: NO & NOx are not used, only 4 gases are needed to obtain an accurate result: HC, CO, CO2, O2.
 * *********** LambdaValues - HC, CO, CO2, O2, HCV, OCV, K1, K
 * *********** LambdaResult - HC, CO, CO2, O2, HCV, OCV, K1, K, Lambda, AFR, Status
 * 
 * The app allows calculating multiple sets of Lambda, into 4 categories/Groups: Lambda|Idle|Cruise|Custom.
 * Each group represents a condition in testing. The names are pretty much arbitrary.
 * 
 * The data for each group is stored in an object GroupData. 
 * *********** GroupData - Group, ILambdaValues, Note, Array<ILambdaValues> Fixes
 * 
 * An associative array/Map holds GroupData for each Group, using the Group as the key.
 * *********** Map<Group, GroupData>
 * 
 * An optional note is attached to each GroupData, through a Note object.
 * The Note object contains the actual note as a string and a bool specifying if the note should be printed with the data. 
 * 
 * Printing will print the data in each group that was calculated, with the optional note if enabled.
 * 
 * An option is available to calculate possible alternative values for the gases to obtain stoichiometry.
 * In other words, what gases would you need to alter and by how much to obtain a Lambda of 1|Air Fuel Ratio 14.7:1|Stoichiometry.
 * The data from these calculations could help a technician determine which direction to take to perform the repairs needed to make the gases fall within acceptable emissions limits.
 * These calculations are saved in the respective GroupData under Fixes, so that they can be re-displayed whenever a user switches groups in the UI, eliminating the need to re-calculate for examination.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lambda Diagnostics';

  constructor(private _actionService: LambdaActionService) {
    this.comparisons = new Map<Group, GroupData>();
    this._actionService.getComparison.subscribe(val => this.setComparisonGroup(val));
    this._actionService.getNote.subscribe(val => this.showNote());
    this._actionService.getHelp.subscribe(val => this.showHelp());
    this._actionService.getPrint.subscribe(val => this.showPrint());
    this._actionService.getExit.subscribe(val => this.doExit());
  }

  ngOnInit() {
    /**
     * initialize our default values throught the app
     */
    this.setComparisonGroup(Group.Lambda);
    this.preloadImages();
  }

  doExit(): void {
    throw new Error('Method not implemented.');
  }
  showPrint(): void {
    throw new Error('Method not implemented.');
  }
  /**
  * sets the value of the property bound to HelpComponent visibility to true
  */
  showHelp(): void {
    this.openHelp = true;
  }
  /**
  * sets the value of the property bound to NoteComponent visibility to true
  */
  showNote(): void {
    this.openNote = true;
  }
  /**
   * sets the value of the property bound to NoteComponent visibility to false. 
   * then updates the note in saved collection respective to the current active group
   * @param val 
   */
  setNote(val: Note): void {
    this.openNote = false;
    this.comparisons.get(this.activeGroup)!.note = val;
  }
  /**
   * updates the NoteCompenent with the last known note respective to current active group
   * @param noteComponent - an instance of the NoteComponent. 
   * This is required since the component does not exist when it is hidden, and can only be updated after init'
   */
  loadNoteIntoComponent(noteComponent: NoteComponent) {
    noteComponent.groupName = this.activeGroup;
    noteComponent.note = this.comparisons.get(this.activeGroup)!.note;
  }
  /**
   * Sets the value for the currently active Group.
   * If comparisons (Map containing Group|GroupData) does not have the group provided, 
   * a new entry for that group will be made. 
   * Updates the logo on page corresponding to the newly active group. 
   * Updates the calculator with stored data from this group.
   * @param val - The group to activate for work.
   */
  setComparisonGroup(val: Group): void {
    this.activeGroup = val;
    if (!this.comparisons.has(val))
      this.comparisons.set(val, new GroupData(val, new LambdaResult()));
    this.updateGroupLogo(val);
    this.updateCalculator(val);
  }
  getComparisonGroup(): Group {
    return this.activeGroup;
  }
  getGroupValues(group: Group): GroupData | null {
    let data: GroupData | undefined;
    if (this.comparisons.has(group) && (data = this.comparisons.get(group)))
      return data; //this.comparisons.get(group)!;
    return null;
  }
  /**
  * Changes/updates/sets the LambdaValues for the currently active group.
  * @param val 
  */
  updateLambdaValues(val: ILambdaValues) {
    this.comparisons.get(this.activeGroup)!.lambdaValues = val;
  }
  /**
   * Sends the stored LambdaValues from the provided group to the calculator component if that Group exists.
   */
  @ViewChild(LambdacalculatorComponent) lambdaCalculator:any
  private updateCalculator(val: Group) {
    if (this.comparisons.has(val))
      this.lambdaCalculator?.setLambdaValues(this.comparisons.get(val)!.lambdaValues);
  }
  /**
   * Changes the logo associated with the active group to the group provided.
   */
  @ViewChild(HeaderComponent) header:any
  private updateGroupLogo(val: Group) {
    this.header?.setSectionLogo(val);
  }

  closeHelp(): void {
    this.openHelp = false;
  }

private preloadImages() {
  const buttons = [
    { src: '/assets/images/lamButOver.gif', size: {width: 94,height: 36} },
    { src: '/assets/images/idleButOver.gif', size: {width: 94,height: 36} },
    { src: '/assets/images/cruiseButOver.gif', size: {width: 94,height: 36} },
    { src: '/assets/images/cusButOver.gif', size: {width: 94,height: 36} },
    { src: '/assets/images/noteButOver.gif', size: {width: 151,height: 44} },
    { src: '/assets/images/prntButOver.gif', size: {width: 125,height: 44} },
    { src: '/assets/images/helpButOver.gif', size: {width: 182,height: 46} },
    { src: '/assets/images/exitButOver.gif', size: {width: 94,height: 46} }
  ];

  buttons.forEach(b => {
    let nav = new Image(b.size.width, b.size.height);
    nav.src = b.src;
  });
}
  /**
   * Bound to the visibilit of the NoteComponent
   */
  openNote: boolean = false;
  /**
   * Bound to the visibilit of the NoteComponent
   */
  openHelp: boolean = false;
  /**
   * Tracks currently active group
   */
  private activeGroup!: Group;
  /**
   * Stores GroupData/LambdaValues for each group
   */
  private comparisons: Map<Group, GroupData>;
}
