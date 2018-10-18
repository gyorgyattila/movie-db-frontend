import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FilmComponent} from './film/film.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModel} from './app.routing-model';
import {HttpClientModule} from '@angular/common/http';
import {FilmService} from './services/film.service';
import {NowPlayingComponent} from './now-playing/now-playing.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    HomeComponent,
    HeaderComponent,
    NowPlayingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModel
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }