import {FilmService} from '../services/film.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FilmModel} from '../film/film.model';
import {Injectable} from '@angular/core';
import {CommentModel} from '../comment/comment.model';
import {CommentService} from '../services/comment.service';
import {Observable} from 'rxjs';

@Injectable()
export class DataStorageService {


  constructor(private httpClient: HttpClient, private filmService: FilmService, private commentService: CommentService) {
  }

  async getTopFourFilms() {
    const films = await this.httpClient.get<FilmModel[]>(`http://0.0.0.0:8080/topFourFilms`).toPromise();
    const filmList: FilmModel[] = [];
    for (const film of films) {
      filmList.push(new FilmModel(film['title'], film['filmId'], 'http://image.tmdb.org/t/p/w185/' + film['poster_path'], film['vote_average'], film['overview'], ['2', '2']));
    }
    this.filmService.setFilms(filmList);
  }

  async getNowPlayingFilms() {
    const films = await this.httpClient.get<FilmModel[]>(`http://0.0.0.0:8080/now-playing`).toPromise();
    const filmList: FilmModel[] = [];
    for (const film of films) {
      filmList.push(new FilmModel(film['title'], film['filmId'], 'http://image.tmdb.org/t/p/w185/' + film['poster_path'], film['vote_average'], film['overview'], ['2', '2']));
    }
    this.filmService.setFilms(filmList);
  }

  async getFilm(id: string) {
    const film = await this.httpClient.get<FilmModel>(`http://0.0.0.0:8080/film/${id}`).toPromise();
    this.filmService.setFilm(new FilmModel(film['title'], film['filmId'], 'http://image.tmdb.org/t/p/w185/' + film['poster_path'], film['vote_average'], film['overview'], ['2', '2']));
  }

  async getCommentsForFilm(id: string) {
    const comments = await this.httpClient.get<CommentModel[]>(`http://0.0.0.0:8080/${id}/get-comments`).toPromise();
    const commentList: CommentModel[] = [];
    for (const comment of comments) {
      commentList.push(new CommentModel(comment['comment'], comment['id']));
    }
    this.commentService.setComments(commentList);
  }

  async addComment(comment: CommentModel) {
    console.log(comment);
    return this.httpClient.post<void>(`http://0.0.0.0:8080/${comment['filmId'].toString()}/add-comment`, comment, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).toPromise();
  }
}
