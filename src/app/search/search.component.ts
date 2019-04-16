import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {debounceTime, map} from 'rxjs/operators';
import {DictionaryService} from '../shared/dictionary.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  public searchText: string = '';
  public searchResult = [];

  filteredList: Observable<string[]>;
  searchControl = new FormControl();

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.filteredList = this.searchControl.valueChanges
      .pipe(
        debounceTime(600),
        map(val => this._filter(val))
      );
  }

  private _filter(value: string): string[] {
    if(value === '' || value === null) {
      return [];
    }
    const filterValue = value.toLowerCase();

    let setFilteredWords = new Set();
    this.dictionaryService.getWords.forEach(word => {

      if(word['infinitive'].includes(filterValue)) {
        setFilteredWords.add(word['infinitive']);
        return
      }

      if(word['value'].includes(filterValue)) {
        setFilteredWords.add(word['infinitive']);
        return
      }

      if(word['valueEng'].includes(filterValue)) {
        setFilteredWords.add(word['infinitive']);
        return
      }

      if(word['valueTRX'].includes(filterValue)) {
        setFilteredWords.add(word['infinitive']);
        return
      }

      // if(word['infinitive'].includes(filterValue) || word['value'].includes(filterValue) || word['valueEng'].includes(filterValue)) {
      //   setFilteredWords.add(this.dictionaryService.getWordsMap.get(word['infinitive']));
      //   return
      // }
    });

    console.log(setFilteredWords);
    return Array.from(setFilteredWords);
  }

  searchWords($event) {
     let text = $event.target.value;
     console.log(text);
  }

}
