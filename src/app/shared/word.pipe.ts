import { Pipe, PipeTransform } from '@angular/core';
import {DictionaryService} from './dictionary.service';

@Pipe({
  name: 'word'
})
export class WordPipe implements PipeTransform {

  constructor(private dictionaryService: DictionaryService) {}

  transform(value: any, args?: any): any {

    debugger
    const allForms = this.dictionaryService.getWordsMap.get(value);

    let result = value;

    allForms.forEach(v=>{
      if(v.value === v.infinitive) {
        result = result + "("+v.valueTRX+") - "+v.valueEng;
      }
    });

    return result;
  }

}
