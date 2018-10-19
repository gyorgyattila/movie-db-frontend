import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {FilmService} from '../services/film.service';
import {FilmModel} from '../film/film.model';

@Component({
  providers: [DataStorageService],
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  films: FilmModel[] = [];

  constructor(private dataStorage: DataStorageService, private filmService: FilmService) {
  }

  ngOnInit() {
    this.filmService.filmListChanged.subscribe(
      (films: FilmModel[]) => {
        this.films = films;
      }
    );
    this.dataStorage.getNowPlayingFilms();
  }

}
