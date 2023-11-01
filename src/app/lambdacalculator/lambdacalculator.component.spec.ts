import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdacalculatorComponent } from './lambdacalculator.component';

describe('LambdacalculatorComponent', () => {
  let component: LambdacalculatorComponent;
  let fixture: ComponentFixture<LambdacalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LambdacalculatorComponent]
    });
    fixture = TestBed.createComponent(LambdacalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
