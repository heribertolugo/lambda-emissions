import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {

  setActive(val: number): void {
    this.activeFaq = val;
  }

  @Output() closeHelp = new EventEmitter();
  close():void {
    this.closeHelp.emit();
  }

  activeFaq: number = 0;

  faq: Map<string, string> = new Map<string, string>([
    ['What is Lambda?',
`\
Symbolized by the Greek letter &#955; the Lambda equation is used to \
Find the ratio of the amount of oxygen actually present in the \
combustion chamber compared to the amount that should have been \
present in order to obtain "perfect" combustion. Thus when a \
mixture contains exactly the amount of oxygen required to burn \
the amount of fuel present, the ratio will be 14.7:1 & Lambda will \
equal 1. Modern fuel sytems generaly operate in a range of &#955; = \
1 &plusmn; .01 under steady-state conditions.\
`],
    ['How to use Lambda Diagnostics.',
'\
Enter the values for the gasses and then hit submit. The Lambda and Air Fuel Ratio will be calculated and shown below. \
In addition Status will display whether the vehicle is running Rich, Lean or Stoichiometric. \
The values entered will be saved in a "group". There are 4 groups in which you can save gas values along with the results. \
The 4 groups are "Lambda", "Idle", "Cruise" and "Custom". These groups allow you to perform repairs &/or modifications, re-run the gas analyzer and record the new results. \
Saving the values and results for diffferent conditions allows you to compare them and determine if you are heading in the correct course of action. \
To change from one group to another simply click on the group name you wish to enter using the buttons on the bottom left. \
You can save a note/comment for each group by clicking the note button. The note will automatically save upon closing the note. \
Checking the "add to final print" in the note window will add the note below the results when the results are printed. \
'],
    ['How will Lambda Diagnostics help me?',
'\
\
'],
    ['How accurate is Lambda?',
'The Brettshneider equation (Lambda) is used by leading automotive companies and gas analyzers accross the world. '],
    ['What are Lambda comparisons?',
'\
The Lambda comparisons allow you to save your values along with results and an optional note in each of the 4 different groups. \
You can use these to compare different scenarios when working on a vehicle to diagnose an imbalance. \
'],
    ['What is "Limit" section for?',
    '5'],
    ['What is "Note" for?',
    '6'],
    ['What is "Print" for?',
    '7'],
    ['What is "Exit" for?',
    '8'],
    ['What is HCV?',
`\
The atomic ratio of Hydrogen to Carbon in fuel. This ratio is \
approximately 1.8 for gasoline.\
`],
    ['What is OCV?',
`\
The atomic ratio of Oxygen to Carbon in fuel. This should be \
approximately 0, exept for oxygenerated fuels, where it is \
approximately .017.\
`],
    ['What is K1?',
`\
The conversion factor from Flame Ionization Detection (FID) \
to NonDispersive Ifrared Analyzer (NDIR). For gasoline, K1 = 6.0.\
`],
    ['I manually calculated the equation but...',
`\
HC is measured in Parts Per Million, but the equation requires it to be \
in the form of a percentage. This conversion is done behind the scenes and \
the percentage value is not displayed. Convert HC to a percentage and then \
solve the equation.\
`],
  ]);

  originalOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>): number => {
    return 0;
  }
}
