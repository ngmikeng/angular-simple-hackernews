import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../core/types/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: IPost;

  constructor() { }

  ngOnInit() {
  }

}
