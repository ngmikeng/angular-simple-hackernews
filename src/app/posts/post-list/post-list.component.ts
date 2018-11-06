import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { TimeService } from '../../core/services/time.service';
import { IPost } from '../../core/types/post';

const LIMIT_ITEMS = 10;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listPosts: IPost[] = [];
  private curLoadMoreIndex = 0;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private timeService: TimeService
  ) { }

  ngOnInit() {
    this.getListPosts();
  }

  getListPosts(fromIndex?: number) {
    const type = this.activatedRoute.routeConfig.path;
    this.postsService.getListPosts(type, fromIndex)
      .subscribe(post => {
        post.timeAgo = this.timeService.timeSince(post.time);
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

  loadMore() {
    this.curLoadMoreIndex = this.curLoadMoreIndex + LIMIT_ITEMS;
    this.getListPosts(this.curLoadMoreIndex);
  }

}
