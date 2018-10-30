import {Component, Input, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {FilmService} from '../services/film.service';
import {FilmModel} from '../film/film.model';
import {HeaderComponent} from '../header/header.component';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  providers: [DataStorageService],
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css'],
})
export class NowPlayingComponent implements OnInit {


  films: FilmModel[] = [];
  searchText = '';
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<any>;

  constructor(private dataStorage: DataStorageService, private filmService: FilmService) {
  }

  ngOnInit() {
    this.filmService.filmListChanged.subscribe(
      (films: FilmModel[]) => {
        this.films = films;
      }
    );
    this.dataStorage.getNowPlayingFilms();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => value.length >= 2 ? this.filter(value) : [])
      );
  }

  private filter(value: string): FilmModel[] {
    const filterValue = value.toLowerCase();

    return this.films.filter(option => option.title.toLowerCase().includes(filterValue));
  }
}
