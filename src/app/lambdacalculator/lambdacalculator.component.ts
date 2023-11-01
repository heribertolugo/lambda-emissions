import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { LambdaValues } from '../shared/models/lambdaValues';
import { ValueTypes } from '../shared/enums/valueTypes'
import { Group } from '../shared/enums/groups';
import { LambdaequationComponent } from '../lambdaequation/lambdaequation.component';
import { ILambdaValues } from '../shared/models/IlambdaValues';
import { LambdaResult } from '../shared/models/lambdaResult';
import { KeyvalueSort } from '../shared/models/keyvalueSortFunctions';

@Component({
  selector: 'app-lambdacalculator',
  templateUrl: './lambdacalculator.component.html',
  styleUrls: ['./lambdacalculator.component.scss']
})
export class LambdacalculatorComponent {
  
  constructor() {
    this.lambdaValues = new LambdaResult(834,.01,13.78,2.29);
  }

  ngOnInit() {

  }

  // @Input() inputFromExtern: LambdaResult = new LambdaResult();
  updateFromExtern(val: LambdaResult) {
    this.lambdaValues = val;
  }

  getVal(ifLimit: boolean, group: Group, gas: string) {

  }

  nextVal(ifLimit: boolean, F: number, gas: string) {
    // if (ifLimit == 'limit') yesL = 'Limit';
    // else yesL = "";
    // NV = (F + 1);
    // Gas = G;
    // document.onkeydown = valKey;
  }

  reset(): void {
    this.lambdaValues = new LambdaResult();
    this.updateEquationUi(true);
  }


  @Output() valuesChanged = new EventEmitter<ILambdaValues>();
  calcIt() {
    let result = this.calculateLambda();
    
    console.log(result);
    this.updateEquationUi(result <= 0);
    this.valuesChanged.emit(this.lambdaValues);
  }

  originalOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>): number => {
    return 0;
  }

  private calculateLambda(): number {
    //HC: 834 ppm, CO: .01%, CO2: 13.78%, O2: 2.29%
    if (!this.lambdaValues || !this.lambdaValues.isValid()) {
      return 0; // error YOU MUST ENTER A VALUE FOR
    }
    // left of parens (top)
    let calc1 = this.est(this.lambdaValues.Co! / 2);
    let calc2 = this.lambdaValues.Co2! + calc1 + this.lambdaValues.O2!;
    // first in parens (top)
    let calc3 = this.est(this.lambdaValues.Hcv! / 4);
    let calc4 = this.est(this.lambdaValues.Co! / this.lambdaValues.Co2!);
    let calc5 = this.est(this.lambdaValues.K + calc4);
    let calc6 = this.est(this.lambdaValues.K / calc5);
    let calc7 = this.est(calc3 * calc6);
    // second in parens (top)
    let calc8 = this.est(this.lambdaValues.Ocv! / 2);
    // third in parens
    let calc9 = this.est(this.lambdaValues.Co2! + this.lambdaValues.Co!);
    // top line
    let calc10 = this.est(calc7 - calc8);
    let calc11 = this.est(calc10 * calc9);
    let calc12 = this.est(calc11 + calc2);
    // left parens (bottom)
    let calc13 = this.est(this.lambdaValues.Hcv! / 4);
    let calc14 = this.est(this.lambdaValues.Ocv! / 2);
    let calc15 = this.est(1 + calc13 - calc14);
    // right parens group (bottom)
    let calc16 = this.est(this.lambdaValues.K1! * (this.lambdaValues.Hc!/10000));
    let calc17 = this.est(this.lambdaValues.Co! + this.lambdaValues.Co2! + calc16);
    // bottom line
    let calc18 = this.est(calc15 * calc17);
    // result
    let result = this.est(calc12 / calc18);
    
    if (!isFinite(result))
      return -1; // error "YOU MUST HAVE VEHICLE'S ENGINE RUNNING WHEN ANALYZING GASSES"

      this.lambdaValues.Lambda = result;
      this.lambdaValues.Afr = `${this.est(result*14.7)}:1`;
      this.lambdaValues.Status = result < 1 ? 'RICH' : (result > 1 ? 'LEAN' : 'STOICHIOMETRIC');
      
      return result;
  }

  private est(n: number): number {
    n = Math.round(n*1000)/1000;
    
    return (n == Math.round(n)) ? n += .000 :
        (n*100 == Math.round(n*100)) ? n += 0 :
        n;
  }

  @ViewChild(LambdaequationComponent) child:any;
  private updateEquationUi(reset: boolean = false): void {
    if (reset)
      this.child.lambdaValues = new LambdaValues();
    else
      this.child.lambdaValues = this.lambdaValues;
  }
  
  lambdaValues: LambdaResult;
  readonly lambdaValueTypes: typeof ValueTypes = ValueTypes;
  readonly lambdaValueGasses: Array<string> = [ValueTypes.Hc, ValueTypes.Co, ValueTypes.Co2, ValueTypes.O2];
  readonly lambdaValueConsts: Array<string> = [ValueTypes.Hcv, ValueTypes.Ocv, ValueTypes.K1];
  readonly lambdaGroup: typeof Group = Group;
}
