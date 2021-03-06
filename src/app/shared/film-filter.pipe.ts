import {Pipe, PipeTransform} from '@angular/core';
import {FilmModel} from '../film/film.model';

@Pipe({
  name: 'filmFilter',
  pure: false
})

export class FilmFilterPipe implements PipeTransform {

  transform(films: FilmModel[], searchTerm: string): FilmModel[] {
    const resultFilms = [];
    if (films.length === 0) {
      return films;
    }
    for (const film of films) {
      if (film.title.toLowerCase().includes(searchTerm.toString().toLowerCase())) {
        resultFilms.push(film);
      }
    }
    return resultFilms;
  }
}
