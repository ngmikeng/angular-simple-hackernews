import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { IPost } from '../../core/types/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listPosts: IPost[] = [];

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getListPosts();
  }

  getListPosts() {
    const type = this.activatedRoute.routeConfig.path;
    this.postsService.getListPosts(type)
      .subscribe(post => {
        this.listPosts.push(post);
        // sort by ids
        this.listPosts.sort((first, second) => {
          const postIds = this.postsService.getPostIds();
          const firstIdIndex = postIds.findIndex((id: number) => id === first.id);
          const secondIdIndex = postIds.findIndex((id: number) => id === second.id);
          return firstIdIndex - secondIdIndex;
        });
      });
  }

}
