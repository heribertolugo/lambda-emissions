import { Injectable } from '@angular/core';
import { Group } from '../shared/enums/groups';
import { BehaviorSubject, Subject } from 'rxjs';
import { Note } from '../shared/models/note';

@Injectable({
  providedIn: 'root'
})
export class LambdaActionService {

  constructor() { }

  private comparison = new BehaviorSubject(Group.Lambda);
  readonly getComparison = this.comparison.asObservable();
  private note = new Subject();
  readonly getNote = this.note.asObservable();
  private print = new Subject();
  readonly getPrint = this.print.asObservable();
  private help = new Subject();
  readonly getHelp = this.help.asObservable();
  private exit = new Subject();
  readonly getExit = this.exit.asObservable();


  setComparison(group: Group): void {
    this.comparison.next(group);
  }
  showNote(): void {
    this.note.next(true);
  }
  showPrint(): void {
    this.print.next(true);
  }
  showHelp(): void {
    this.help.next(true);
  }
  doExit(): void {
    this.exit.next(true);
  }
}
