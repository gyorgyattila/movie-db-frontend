import {Component, OnInit} from '@angular/core';
import {FilmModel} from '../film/film.model';
import {DataStorageService} from '../shared/data-storage.service';
import {FilmService} from '../services/film.service';

@Component({
  providers: [DataStorageService],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  films: FilmModel[] = [];

  constructor(private dataStorageService: DataStorageService, private filmService: FilmService) {
  }

  ngOnInit() {
    this.filmService.professorListChanged.subscribe(
      (films: FilmModel[]) => {
        this.films = films;
      }
    );
    this.dataStorageService.getFilms();
  }

}
