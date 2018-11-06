export class CommentModel {
  comment: string;
  filmId: number;
  voteNumber: number;
  userName: string;


  constructor(comment: string, filmId: number, userName: string, voteNumber: number) {
    this.comment = comment;
    this.filmId = filmId;
    this.userName = userName;
    this.voteNumber = voteNumber;
  }
}
