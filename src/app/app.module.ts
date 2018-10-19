import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FilmComponent} from './film/film.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModel} from './app.routing-model';
import {HttpClientModule} from '@angular/common/http';
import {FilmService} from './services/film.service';
import {NowPlayingComponent} from './now-playing/now-playing.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    HomeComponent,
    HeaderComponent,
    NowPlayingComponent
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModel,
    AngularFontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
