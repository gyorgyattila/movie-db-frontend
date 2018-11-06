import {Component, OnInit} from '@angular/core';
import {FilmModel} from '../film/film.model';
import {DataStorageService} from '../shared/data-storage.service';
import {FilmService} from '../services/film.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDatepicker, MatDatepickerModule} from '@angular/material';
import {AuthService} from '../services/auth.service';

@Component({
  providers: [DataStorageService],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  films: FilmModel[] = [];

  constructor(private dataStorageService: DataStorageService, private filmService: FilmService, public authService: AuthService) {
  }

  ngOnInit() {
    this.filmService.filmListChanged.subscribe(
      (films: FilmModel[]) => {
        this.films = films;
      }
    );
    this.dataStorageService.getTopFourFilms();
  }

}
