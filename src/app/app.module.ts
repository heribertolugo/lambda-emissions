import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionlogoComponent } from './sectionlogo/sectionlogo.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { LogobannerComponent } from './logobanner/logobanner.component';
import { LambdacalculatorComponent } from './lambdacalculator/lambdacalculator.component';
import { HeaderComponent } from './header/header.component';
import { LambdaequationComponent } from './lambdaequation/lambdaequation.component';
import { SafeHtmlPipe } from './shared/pipes/SafeHtmlPipe';
import { NoteComponent } from './note/note.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionlogoComponent,
    BottomnavComponent,
    LogobannerComponent,
    LambdacalculatorComponent,
    HeaderComponent,
    LambdaequationComponent,
    SafeHtmlPipe,
    NoteComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SafeHtmlPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
