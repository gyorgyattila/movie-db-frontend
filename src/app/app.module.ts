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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommentComponent} from './comment/comment.component';
import {CommentService} from './services/comment.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {FilmFilterPipe} from './shared/film-filter.pipe';
import {AuthService} from './services/auth.service';
import {UserComponent} from './user/user.component';
import {UserService} from './services/user.service';
import {SafePipe} from './shared/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    HomeComponent,
    HeaderComponent,
    NowPlayingComponent,
    CommentComponent,
    FilmFilterPipe,
    UserComponent,
    SafePipe
  ],
  imports: [
    RouterModule,
    NgbModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModel,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  providers: [FilmService, CommentService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
