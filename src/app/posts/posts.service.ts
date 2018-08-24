import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HackernewsService } from '../core/services/hackernews.service';
import { IPost } from '../core/types/post';

const LIMIT_ITEMS = 10;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private hackernewsService: HackernewsService
  ) { }

  getPostIds() {
    return this.hackernewsService.getPostIds();
  }

  getListPosts(type: string): Observable<IPost> {
    return this.hackernewsService.getIds(type)
      .pipe(
        mergeMap((ids: number[]) => this.hackernewsService.getPostItems(ids.slice(0, LIMIT_ITEMS))),
      )
  }
}
