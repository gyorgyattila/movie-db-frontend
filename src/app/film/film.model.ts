export class FilmModel {
  title: string;
  film_id: number;
  poster_path: string;
  vote_average: number;
  overview: string;
  genres: string[];
  trailer: string;


  constructor(title: string, id: number, poster_path: string, vote_average: number, overview: string, genres: string[], trailer: string) {
    this.title = title;
    this.film_id = id;
    this.poster_path = poster_path;
    this.vote_average = vote_average;
    this.overview = overview;
    this.genres = genres;
    this.trailer = trailer;
  }
}
