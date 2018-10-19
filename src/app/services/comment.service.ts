import {Subject} from 'rxjs';
import {CommentModel} from '../comment/comment.model';

export class CommentService {
  constructor() {

  }

  private comments: CommentModel[];
  commentsChanged = new Subject<CommentModel[]>();

  setComments(comments: CommentModel[]) {
    this.comments = comments;
    this.commentsChanged.next(comments);
  }
}
