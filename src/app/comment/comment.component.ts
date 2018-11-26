import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommentModel} from './comment.model';
import {ActivatedRoute, Params} from '@angular/router';
import {CommentService} from '../services/comment.service';
import {DataStorageService} from '../shared/data-storage.service';
import {InputMetadataWalker} from 'codelyzer/noInputRenameRule';
import {UserModel} from '../user/user.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @ViewChild('f') commentForm: NgForm;

  @Input() user: UserModel;
  filmId: number;
  comments: CommentModel[];
  votedUp: boolean;
  newComment: CommentModel;

  constructor(private route: ActivatedRoute, private commentService: CommentService, private daraStorage: DataStorageService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.filmId = +params['id'];
      }
    );
    this.commentService.commentsChanged.subscribe(
      (comments: CommentModel[]) => {
        this.comments = comments;
      }
    );
    this.daraStorage.getCommentsForFilm(this.filmId.toString());
  }

  onSubmit() {
    this.newComment = new CommentModel(this.commentForm.value.commentText, this.filmId, this.user.nickName, 0);
    this.comments.push(this.newComment);
    this.daraStorage.addComment(this.newComment);
    this.commentForm.reset();
  }

  onVoteUp(index: number) {
    this.comments[index].voteNumber += 1;
    this.daraStorage.voteUp(this.comments[index].filmId);
  }

  onVoteDown(index: number) {
    this.comments[index].voteNumber -= 1;
    this.daraStorage.voteDown(this.comments[index].filmId);
  }
}
