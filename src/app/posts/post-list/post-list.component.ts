import { Component, OnInit } from '@angular/core';
import { PostsService, IPost } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listPosts: IPost[] = [];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.getListPosts();
  }

  getListPosts() {
    this.listPosts = this.postsService.getListPosts();
  }

}
