export class FilmModel {
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
  overview: string;
  genres: string[];


  constructor(title: string, id: number, poster_path: string, vote_average: number, overview: string, genres: string[]) {
    this.title = title;
    this.id = id;
    this.poster_path = poster_path;
    this.vote_average = vote_average;
    this.overview = overview;
    this.genres = genres;
  }
}
