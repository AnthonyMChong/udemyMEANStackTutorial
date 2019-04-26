import { Component } from '@angular/core';

// this is a decorator
// takes configuration via object like adding template
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {

  // class variables do nto need var let or const
  newpost = 'NO CONTENT ';

  onAddPost(){//styling is on is for functions that are triggered by events
    // alert('Post added!')
    this.newpost = "the user\'s post"

  }

}
