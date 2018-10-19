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
    console.log(this.films);
  }

  getFilm(id: number) {
    console.log(this.films);
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
}
