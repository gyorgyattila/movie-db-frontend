import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommentModel} from './comment.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @ViewChild('f') commentForm: NgForm;
  filmId: number;
  comments: CommentModel[];

  newComment: CommentModel;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.filmId = +params['id'];
      }
    );
    // this.comment.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );
  }

  onSubmit() {
    this.newComment = new CommentModel(this.commentForm.value.commentText, this.filmId);
    console.log(this.newComment);
    console.log('itt vagyok');
  }

}
