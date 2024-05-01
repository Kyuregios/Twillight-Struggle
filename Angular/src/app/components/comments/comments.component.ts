import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Comentario } from '../../model/Comment';
import { CommentsService } from '../../services/comments.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private commentService: CommentsService) {
    
  }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      player: ['', Validators.required],
      comment_text: ['', Validators.required]
    });
  }

  addComment() {
    if (this.commentForm.invalid) {
      return;
    }

    this.commentService.crearComment(this.commentForm.value)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );
  }
}