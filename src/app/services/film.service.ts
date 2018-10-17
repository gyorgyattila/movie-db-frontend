import {FilmModel} from '../film/film.model';
import {Subject} from 'rxjs';

export class FilmService {
  private films: FilmModel[];
  professorListChanged = new Subject<FilmModel[]>();


  constructor() {

  }

  setFilms(films: FilmModel[]) {
    this.films = films;
    this.professorListChanged.next(films);
  }
}
