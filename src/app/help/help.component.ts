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
    '1'],
    ['How will Lambda Diagnostics help me?',
    '2'],
    ['How accurate is Lambda?',
    '3'],
    ['What are Lambda comparisons?',
    '4'],
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
