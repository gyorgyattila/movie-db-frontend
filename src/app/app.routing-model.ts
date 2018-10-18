import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NowPlayingComponent} from './now-playing/now-playing.component';
import {FilmModel} from './film/film.model';
import {FilmComponent} from './film/film.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'now-playing', component: NowPlayingComponent},
  {path: 'film/:id', component: FilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModel {

}
