import { KeyValue } from "@angular/common";

export class KeyvalueSort {
    // Preserve original property order
    static originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
        return 0;
    }
  
  // Order by ascending property value
  static valueAscOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.value.localeCompare(b.value);
  }
  
  // Order by descending property key
  static keyDescOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }
}