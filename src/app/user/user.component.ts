import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {FilmModel} from '../film/film.model';
import {Subscription} from 'rxjs';
import {UserService} from '../services/user.service';
import {UserModel} from './user.model';
import {HttpClient} from '@angular/common/http';
import {FilmService} from '../services/film.service';

@Component({
  providers: [DataStorageService],
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  watchlist: FilmModel[];
  userSub: Subscription;
  user: UserModel;

  constructor(private dataStorage: DataStorageService, private userService: UserService, private filmService: FilmService) {
  }

  ngOnInit() {
    this.userSub = this.userService.user.subscribe(user => this.user = user);
    this.filmService.filmListChanged.subscribe(
      (films: FilmModel[]) => {
        this.watchlist = films;
      }
    );
    this.dataStorage.getWatchlist(this.user.id);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
