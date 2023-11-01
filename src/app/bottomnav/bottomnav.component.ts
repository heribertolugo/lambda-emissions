import { Component } from '@angular/core';
import { LambdaActionService } from '../services/lambda-action.service';
import { Group } from '../shared/enums/groups';

@Component({
  selector: 'app-bottomnav',
  templateUrl: './bottomnav.component.html',
  styleUrls: ['./bottomnav.component.scss']
})
export class BottomnavComponent {
  constructor(private _actionService: LambdaActionService) {
  }

  setComparisonGroup(value: string): void {
    let group: Group = Group[value as keyof typeof Group];
    this._actionService.setComparison(group);
  }
  showNote(): void {
    this._actionService.showNote();
  }
  showPrint(): void {
    this._actionService.showPrint();
  }
  showHelp(): void {
    this._actionService.showHelp();
  }
  doExit(): void {
    this._actionService.doExit();
  }

  readonly groups: any = {1: Group.Lambda, 3: Group.Idle, 5: Group.Cruise, 7: Group.Custom};
}
