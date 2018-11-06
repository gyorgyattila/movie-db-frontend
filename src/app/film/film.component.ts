import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FilmModel} from './film.model';
import {FilmService} from '../services/film.service';
import {DataStorageService} from '../shared/data-storage.service';
import {Subscription} from 'rxjs';
import {UserService} from '../services/user.service';
import {UserModel} from '../user/user.model';
import {AuthService} from '../services/auth.service';

@Component({
  providers: [DataStorageService],
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit, OnDestroy {

  currentRate = 0;
  id: number;
  film: FilmModel;
  subscription: Subscription;
  userSub: Subscription;
  user: UserModel;

  constructor(private route: ActivatedRoute, private filmService: FilmService, private dataStorage: DataStorageService,
              private userService: UserService, public authService: AuthService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // this.film = this.filmService.getFilm(this.id);
      }
    );
    this.subscription = this.filmService.filmChanged.subscribe(
      (film: FilmModel) => {
        this.film = film;
      }
    );
    this.dataStorage.getFilm(String(this.id));
    this.userSub = this.userService.user.subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  onRateChange() {
    this.dataStorage.rateFilm(this.currentRate);
  }

  onAddWatchlist() {
    this.dataStorage.addToWatchlist(this.id, this.user.id);
  }
}
