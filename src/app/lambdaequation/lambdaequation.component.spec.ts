import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdaequationComponent } from './lambdaequation.component';

describe('LambdaequationComponent', () => {
  let component: LambdaequationComponent;
  let fixture: ComponentFixture<LambdaequationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LambdaequationComponent]
    });
    fixture = TestBed.createComponent(LambdaequationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
