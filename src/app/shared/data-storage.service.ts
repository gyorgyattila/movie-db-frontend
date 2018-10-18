import {FilmService} from '../services/film.service';
import {HttpClient} from '@angular/common/http';
import {FilmModel} from '../film/film.model';
import {Injectable} from '@angular/core';

@Injectable()
export class DataStorageService {


  constructor(private httpClient: HttpClient, private filmService: FilmService) {
  }

  async getTopFourFilms() {
    const films = await this.httpClient.get<FilmModel[]>(`http://0.0.0.0:8080/topFourFilms`).toPromise();
    console.log('itt vagyok');
    const filmList: FilmModel[] = [];
    for (const film of films) {
      filmList.push(new FilmModel(film['title'], film['id'], 'http://image.tmdb.org/t/p/w185/' + film['poster_path'], film['vote_average'], film['overview'], ['2', '2']));
    }
    this.filmService.setFilms(filmList);
  }

  async getNowPlayingFilms() {
    const films = await this.httpClient.get<FilmModel[]>(`http://0.0.0.0:8080/now-playing`).toPromise();
    console.log('itt vagyok');
    const filmList: FilmModel[] = [];
    for (const film of films) {
      filmList.push(new FilmModel(film['title'], film['id'], 'http://image.tmdb.org/t/p/w185/' + film['poster_path'], film['vote_average'], film['overview'], ['2', '2']));
    }
    this.filmService.setFilms(filmList);
  }


}
