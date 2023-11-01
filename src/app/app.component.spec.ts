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
    });

    appFixture = TestBed.createComponent(AppComponent);
    appInstance = appFixture.componentInstance;
    appCompiled = appFixture.nativeElement as HTMLElement;
  }
  );

  it('should create the app', () => {
    expect(appInstance).toBeTruthy();
  });

  it(`should have as title 'Lambda Diagnostics'`, () => {
    expect(appInstance.title).toEqual('Lambda Diagnostics');
  });

  it('should toggle render NoteComponent. Initial is non-rendered', () => {
    appFixture.detectChanges();
    expect(appCompiled.querySelector('app-note')).toBeNull(); // ensure it inits non-rendered
    appInstance.showNote(); // call toggle to render
    appFixture.detectChanges();
    expect(appInstance.openNote).toBeTrue(); // ensure render flag is true
    expect(appCompiled.querySelector('app-note')).toBeTruthy(); // ensure rendered
    appInstance.setNote(new Note()); // call toggle to non-render
    appFixture.detectChanges();
    expect(appInstance.openNote).toBeFalse(); // ensure render flag is false
    expect(appCompiled.querySelector('app-note')).toBeNull(); // ensure not rendered
  });

  it('should toggle render HelpComponent. Initial is non-rendered', () => {
    appFixture.detectChanges();
    expect(appCompiled.querySelector('app-help')).toBeNull(); // ensure it inits non-rendered
    appInstance.showHelp(); // call toggle to render
    appFixture.detectChanges();
    expect(appInstance.openHelp).toBeTrue(); // ensure render flag is true
    expect(appCompiled.querySelector('app-help')).toBeTruthy(); // ensure rendered
    appInstance.closeHelp(); // call toggle to non-render
    appFixture.detectChanges();
    expect(appInstance.openHelp).toBeFalse(); // ensure render flag is false
    expect(appCompiled.querySelector('app-help')).toBeNull(); // ensure not rendered
  });

  it('should render container div', () => {
    appFixture.detectChanges();
    expect(appCompiled.querySelector('.page_container')).toBeTruthy();
  });

  it('should render HeaderComponent', () => {
    appFixture.detectChanges();
    expect(appCompiled.querySelector('.page_container header app-header')).toBeTruthy();
  });

  it('should render LambdaCalculatorComponent', () => {
    appFixture.detectChanges();
    expect(appCompiled.querySelector('.page_container main app-lambdacalculator')).toBeTruthy();
  });

  it('should render BottomnavComponent', () => {
    appFixture.detectChanges();
    expect(appCompiled.querySelector('.page_container footer app-bottomnav')).toBeTruthy();
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
