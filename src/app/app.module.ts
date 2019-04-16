import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DictComponent } from './dict/dict.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DictionaryService} from './shared/dictionary.service';
import {HttpClientModule} from '@angular/common/http';
import { WordPipe } from './shared/word.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DictComponent,
    HeaderComponent,
    WordPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    DictionaryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
