import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class DictionaryService {

  private dictionary = [];
  private wordsMap = new Map();

  public loading = false;

  constructor(private httpClient: HttpClient) { }

  getDictionary(data = {}){
    this.loading = true;

    console.log(environment['api_endpoint']);
    this.httpClient.get(`${environment['api_endpoint']}/api/words`
    ).subscribe((results)=> {
      this.dictionary = results['words'];

      this.dictionary.forEach((word) => {
        if (this.wordsMap.has(word.infinitive)) {
          this.wordsMap.get(word.infinitive).push(word);
        } else {
          const words = [
            word
          ];

          this.wordsMap.set(word.infinitive, words);
        }
      });


      this.loading = false;
      console.log(results);
     });
  }

  get getWords() {
    return this.dictionary;
  }

  get getWordsMap() {
    return this.wordsMap;
  }
}
