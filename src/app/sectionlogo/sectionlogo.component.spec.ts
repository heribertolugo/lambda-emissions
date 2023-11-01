import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionlogoComponent } from './sectionlogo.component';

describe('SectionlogoComponent', () => {
  let component: SectionlogoComponent;
  let fixture: ComponentFixture<SectionlogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionlogoComponent]
    });
    fixture = TestBed.createComponent(SectionlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
