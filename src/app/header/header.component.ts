import { Component, ViewChild } from '@angular/core';
import { SectionlogoComponent } from '../sectionlogo/sectionlogo.component';
import { Group } from '../shared/enums/groups';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {  
  @ViewChild(SectionlogoComponent) sectionLogo:any;
  setSectionLogo(section: Group) {
    this.sectionLogo.logoUrl = this.logos.get(section);
  }

  private readonly logos: Map<Group, string> = new Map<Group, string>([
    [Group.Lambda, '/assets/images/lambdaLogo.jpg'], 
    [Group.Idle, '/assets/images/idleLogo.jpg'], 
    [Group.Cruise, '/assets/images/cruiseLogo.jpg'], 
    [Group.Custom, '/assets/images/customLogo.jpg']
  ]);
}
