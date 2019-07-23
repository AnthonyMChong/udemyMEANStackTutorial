import { Component , EventEmitter, Output} from '@angular/core';
import {Post} from '../post.model';
import {NgForm} from '@angular/forms';

// this is a decorator
// takes configuration via object like adding template
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  // class variables do nto need var let or const
  newpost = 'NO CONTENT ';
  @Output() postCreated = new EventEmitter<Post>();

  enteredTitle = '';
  enteredContent = '';

  onAddPost( form: NgForm ){//styling is on is for functions that are triggered by events
    // alert('Post added!')
    if (form.invalid){
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);

  }

}
