import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogobannerComponent } from './logobanner.component';

describe('LogobannerComponent', () => {
  let component: LogobannerComponent;
  let fixture: ComponentFixture<LogobannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogobannerComponent]
    });
    fixture = TestBed.createComponent(LogobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
