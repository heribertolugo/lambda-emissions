import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LambdacalculatorComponent } from './lambdacalculator/lambdacalculator.component';
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './note/note.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { LogobannerComponent } from './logobanner/logobanner.component';
import { SectionlogoComponent } from './sectionlogo/sectionlogo.component';
import { LambdaequationComponent } from './lambdaequation/lambdaequation.component';
import { SafeHtmlPipe } from './shared/pipes/SafeHtmlPipe';
import { FormsModule } from '@angular/forms';
import { HelpComponent } from './help/help.component';
import { Note } from './shared/models/note';
import { Group } from './shared/enums/groups';
import { GroupData } from './shared/models/groupData';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LambdaValues } from './shared/models/lambdaValues';
import { ILambdaValues } from './shared/models/IlambdaValues';

describe('AppComponent', () => {
  let appFixture: ComponentFixture<AppComponent>;
  let appInstance: AppComponent;
  let appCompiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [
        AppComponent,
        LambdacalculatorComponent,
        HeaderComponent,
        NoteComponent,
        BottomnavComponent,
        LogobannerComponent,
        SectionlogoComponent,
        LambdacalculatorComponent,
        LambdaequationComponent,
        SafeHtmlPipe,
        HelpComponent
      ]
    }).compileComponents();

    appFixture = TestBed.createComponent(AppComponent);
    appInstance = appFixture.componentInstance;
    appCompiled = appFixture.nativeElement as HTMLElement;
  });

  // #region Unit tests

  it('should create the app', () => {
    expect(appInstance).toBeDefined();
  });

  it(`should have as title 'Lambda Diagnostics'`, () => {
    expect(appInstance.title).toEqual('Lambda Diagnostics');
  });

  it('should toggle render NoteComponent. Initial is non-rendered', () => {
    appFixture.detectChanges();
    expect(appCompiled.querySelector('app-note'))
      .withContext('note was not hidden by default').toBeNull(); // ensure it inits non-rendered
    appInstance.showNote(); // call toggle to render
    expect(appInstance.openNote).toBeTrue(); // ensure render flag is true
    expect(appCompiled.querySelector('app-note')).toBeDefined(); // ensure rendered
    appInstance.setNote(new Note()); // call toggle to non-render
    expect(appInstance.openNote).toBeFalse(); // ensure render flag is false
    expect(appCompiled.querySelector('app-note')).toBeNull(); // ensure not rendered
  });

  it('should toggle render HelpComponent. Initial is non-rendered', () => {
    appFixture.detectChanges();
    expect(appCompiled.querySelector('app-help')).toBeNull(); // ensure it inits non-rendered
    appInstance.showHelp(); // call toggle to render
    expect(appInstance.openHelp).toBeTrue(); // ensure render flag is true
    expect(appCompiled.querySelector('app-help')).toBeDefined(); // ensure rendered
    appInstance.closeHelp(); // call toggle to non-render
    expect(appInstance.openHelp).toBeFalse(); // ensure render flag is false
    expect(appCompiled.querySelector('app-help')).toBeNull(); // ensure not rendered
  });

  it('should render container div', () => {
    expect(appCompiled.querySelector('.page_container')).toBeDefined();
  });

  it('should render HeaderComponent', () => {
    expect(appCompiled.querySelector('.page_container header app-header')).toBeDefined();
  });

  it('should render LambdaCalculatorComponent', () => {
    expect(appCompiled.querySelector('.page_container main app-lambdacalculator')).toBeDefined();
  });

  it('should render BottomnavComponent', () => {
    expect(appCompiled.querySelector('.page_container footer app-bottomnav')).toBeDefined();
  });

  it('should set note and groupName for NoteComponent using current active Group', () => {
    appInstance.showNote();
    appFixture.detectChanges();
    let noteDebug: DebugElement = appFixture.debugElement.query(By.directive(NoteComponent));
    //let noteFixture: ComponentFixture<NoteComponent> = TestBed.createComponent(NoteComponent);
    let noteInstance: NoteComponent = noteDebug.componentInstance; //noteFixture.componentInstance;
    let activeGroup: Group = appInstance.getComparisonGroup();
    let groupData: GroupData | undefined = appInstance['comparisons'].get(activeGroup); 
    expect(groupData).toBeDefined();
    let note: Note = groupData!.note;
    appInstance.loadNoteIntoComponent(noteInstance);
    expect(noteInstance.groupName).toEqual(activeGroup);
    expect(noteInstance.note).toEqual(note);
  });

  it('should set current active group', () => {
    for (const group of Object.values(Group)) {
      appInstance.setComparisonGroup(group);
      expect(appInstance.getComparisonGroup()).toEqual(group);
    }    
  });

  it('should set group logo using group provided', () => {
    let headerDebug: DebugElement = appFixture.debugElement.query(By.directive(HeaderComponent));
    expect(headerDebug).withContext('headerDebug isnt truthy').toBeDefined();
    let sectionLogoDebug: DebugElement = headerDebug.query(By.directive(SectionlogoComponent));
    expect(sectionLogoDebug).withContext('sectionLogoDebug isnt truthy').toBeDefined();
    let activeLogo: string = sectionLogoDebug.componentInstance.logoUrl;
    expect(activeLogo).withContext('activeLogo isnt truthy').toBeDefined();
    const initialGroup: Group = appInstance.getComparisonGroup();
    expect(initialGroup).withContext('initialGroup isnt truthy').toBeDefined();
    appFixture.detectChanges();
    for (const group of Object.values(Group).filter(g => g != initialGroup)) {
      appInstance['updateGroupLogo'](group);
      expect(sectionLogoDebug.componentInstance.logoUrl).withContext('logo url did not change').not.toEqual(activeLogo);
      activeLogo = sectionLogoDebug.componentInstance.logoUrl;
    }
  });

  it('should set lambda values for the current group', () => {
    const testValues: ILambdaValues = new LambdaValues(1,2,3,4,5,6,7);
    const testEqual: string = JSON.stringify(testValues);
    
    for (const group of Object.values(Group)) {
      if (!appInstance['comparisons'].has(group))
        appInstance['comparisons'].set(group, new GroupData(group, new LambdaValues()));
        appInstance['activeGroup'] = group;
      appInstance.updateLambdaValues(testValues);
      expect(JSON.stringify(appInstance['comparisons']
        .get(group)?.lambdaValues)).withContext(`${group} was not equal`)
        .toEqual(testEqual);
    }
  });

  it('should set calculator component values to the values in provided group', () => {
    /** @TODO updateCalculator(val: Group) */
  });
  // #endregion

  
});
