import { Component } from '@angular/core';

// this is a decorator
// takes configuration via object like adding template
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-creat.component.css']
})
export class PostCreateComponent {

  // class variables do nto need var let or const
  newpost = 'NO CONTENT ';

  enteredValue = '';

  onAddPost(){//styling is on is for functions that are triggered by events
    // alert('Post added!')
    this.newpost = this.enteredValue

  }

}
