export class CommentModel {
  comment: string;
  filmId: number;
  voteNumber: number;
  userId: number;


  constructor(comment: string, filmId: number) {
    this.comment = comment;
    this.filmId = filmId;
  }
}
