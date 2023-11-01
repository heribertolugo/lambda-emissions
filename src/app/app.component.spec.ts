import { TestBed, async, waitForAsync } from '@angular/core/testing';
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
import { Component } from '@angular/core';
import { HelpComponent } from './help/help.component';
import { Note } from './shared/models/note';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
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
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Lambda Diagnostics'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Lambda Diagnostics');
  });

  it('should toggle render NoteComponent. Initial is non-rendered', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-note')).toBeNull();
    const instance = fixture.componentInstance;
    instance.showNote();
    fixture.detectChanges();
    expect(instance.openNote).toBeTrue();
    expect(compiled.querySelector('app-note')).toBeTruthy();
    instance.setNote(new Note());
    fixture.detectChanges();
    expect(instance.openNote).toBeFalse();
    expect(compiled.querySelector('app-note')).toBeNull();
  });

  it('should toggle render HelpComponent. Initial is non-rendered', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-help')).toBeNull();
    const instance = fixture.componentInstance;
    instance.showHelp();
    fixture.detectChanges();
    expect(instance.openHelp).toBeTrue();
    expect(compiled.querySelector('app-help')).toBeTruthy();
    instance.closeHelp();
    fixture.detectChanges();
    expect(instance.openHelp).toBeFalse();
    expect(compiled.querySelector('app-help')).toBeNull();
  });

  it('should render container div', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page_container')).toBeTruthy();
  });

  it('should render HeaderComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page_container header app-header')).toBeTruthy();
  });

  it('should render LambdaCalculatorComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page_container main app-lambdacalculator')).toBeTruthy();
  });

  it('should render BottomnavComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page_container footer app-bottomnav')).toBeTruthy();
  });

  it('should set note and groupName for NoteComponent using current active Group', () => {
    /** @TODO loadNoteIntoComponent(noteComponent: NoteComponent) */
  });

  it('should set or create current active group and group data', () => {
    /** @TODO setComparisonGroup(val: Group) */
  });

  it('should set group logo using group provided', () => {
    /** @TODO updateGroupLogo(val: Group) */
  });

  it('should set lambda values for the current group', () => {
    /** @TODO updateLambdaValues(val: ILambdaValues) */
  });

  it('should set calculator component values to the values in provided group', () => {
    /** @TODO updateCalculator(val: Group) */
  });
});
