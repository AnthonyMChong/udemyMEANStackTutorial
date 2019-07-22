import { Component , EventEmitter, Output} from '@angular/core';

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
  @Output() postCreated = new EventEmitter();

  enteredTitle = '';
  enteredContent = '';

  onAddPost(){//styling is on is for functions that are triggered by events
    // alert('Post added!')
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post)

  }

}
