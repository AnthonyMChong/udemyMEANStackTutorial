import { Component , Input} from '@angular/core';

// this is a decorator
// takes configuration via object like adding template
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title: "First Post" , content: "This is the first post"},
  //   {title: "second Post" , content: "This is the second post"},
  //   {title: "Thrid Post" , content: "This is the Thrid post"}
  // ];

  @Input() posts = [];
  //make this storedPosts property bindable in the app.componenet (parent)
}
