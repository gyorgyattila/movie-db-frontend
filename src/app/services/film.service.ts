import {FilmModel} from '../film/film.model';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinct, distinctUntilKeyChanged, switchMap} from 'rxjs/operators';

export class FilmService {

  private films: FilmModel[];
  filmListChanged = new Subject<FilmModel[]>();
  private activeFilm: FilmModel;
  filmChanged = new Subject<FilmModel>();
  textChanged = new Subject<string>();
  private _searchText: string;


  constructor() {
  }

  setFilms(films: FilmModel[]) {
    this.films = films;
    this.filmListChanged.next(films);
  }

  getFilm(id: number) {
    for (const film of this.films) {
      if (film['film_id'] === id) {
        return film;
      }
    }
  }

  setFilm(film: FilmModel) {
    this.activeFilm = film;
    this.filmChanged.next(film);
  }

  get searchText(): string {
    return this._searchText;
  }

  setSearchText(value: string) {
    this.textChanged.next(value);
  }
}
