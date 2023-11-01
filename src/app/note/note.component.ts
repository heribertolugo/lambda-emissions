import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../shared/models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  constructor() {
    this.note = new Note();
  }

  @Output() loadNote = new EventEmitter<NoteComponent>();
  ngOnInit() {
    this.loadNote.emit(this);
  }

  @Output() closeNote = new EventEmitter<Note>();
  close():void {
    this.closeNote.emit(this.note);
  }

  note: Note;
  groupName: string = '';
}
