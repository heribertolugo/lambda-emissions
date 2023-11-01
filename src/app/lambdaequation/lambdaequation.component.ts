import { Component } from '@angular/core';
import { LambdaValues } from '../shared/models/lambdaValues';
import { ValueTypes } from '../shared/enums/valueTypes';
import { ILambdaValues } from '../shared/models/IlambdaValues';

@Component({
  selector: 'app-lambdaequation',
  templateUrl: './lambdaequation.component.html',
  styleUrls: ['./lambdaequation.component.scss', './../../styles.scss']
})
export class LambdaequationComponent {
  constructor() {
    this.lambdaValues = new LambdaValues();
  }

  toChemical(value: string): string {
    let output: string = '';
    let isSub: boolean = false;
    let isNum = (v: string): boolean => { return Number.isInteger(Number.parseInt(v)); }

    for(let i: number = 0; i < value.length; i++) {
      if (isNum(value[i]) && !isSub) {
        isSub = true;
        output += '<span style="font-family: Geneva, Arial, Helvetica, san-serif; font-size: 12px; vertical-align: sub; position: relative; top: .5rem;">';
      } else if (!isNum(value[i]) && isSub) {
        isSub = false;
        output += '</span>';
      }

      output += value[i].toUpperCase();
    }

    return output;
  }

  lambdaValues: ILambdaValues;
  readonly lambdaValueTypes: typeof ValueTypes = ValueTypes;
}
