import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getListPosts(): IPost[] {
    return [
      { id: 1, by: 'John', score: 100, time: Date.now(), title: 'Item 1' },
      { id: 2, by: 'Doe', score: 88, time: Date.now(), title: 'Item 2' },
      { id: 3, by: 'Pete', score: 99, time: Date.now(), title: 'Item 3' }
    ];
  }
}

export interface IPost {
  id: number;
  by: string;
  score: number;
  time: number;
  title?: string;
}
