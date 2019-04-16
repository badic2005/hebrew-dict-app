import {Component, OnInit} from '@angular/core';
import {DictionaryService} from './shared/dictionary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'hebrew-dict-app';

  constructor(
    public dictionaryService: DictionaryService
  ){}

  ngOnInit(): void {
      this.dictionaryService.getDictionary();
  }


}
