import { Post } from './post.model';

export class PostsService{
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts]; // spread operator to create a copy of new array
  }

  addPost(title: string, content: string){
    const post: Post = {title: title , content: content};
    this.posts.push(post);
  }
};
