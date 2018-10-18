import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FilmModel} from './film.model';
import {FilmService} from '../services/film.service';
import {DataStorageService} from '../shared/data-storage.service';
import {Subscription} from 'rxjs';

@Component({
  providers: [DataStorageService],
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit, OnDestroy {

  id: number;
  film: FilmModel;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private filmService: FilmService, private dataStorage: DataStorageService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
    this.subscription = this.filmService.filmChanged.subscribe(
      (film: FilmModel) => {
        this.film = film;
      }
    );
    console.log(this.film);
    console.log(this.id);
    this.dataStorage.getFilm(String(this.id));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
