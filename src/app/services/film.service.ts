import {FilmModel} from '../film/film.model';
import {Subject} from 'rxjs';

export class FilmService {
  private films: FilmModel[];
  professorListChanged = new Subject<FilmModel[]>();
  private activeFilm: FilmModel;
  filmChanged = new Subject<FilmModel>();


  constructor() {

  }

  setFilms(films: FilmModel[]) {
    this.films = films;
    this.professorListChanged.next(films);
  }

  getFilm(id: number) {
    for (const film of this.films) {
      if (film['filmId'] === id) {
        return film;
      }
    }
  }

  setFilm(film: FilmModel) {
    this.activeFilm = film;
    this.filmChanged.next(film);
  }
}
