import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from '../../posts/posts.service';

@Component({
  selector: 'app-modal-comments',
  templateUrl: './modal-comments.component.html',
  styleUrls: ['./modal-comments.component.css']
})
export class ModalCommentsComponent implements OnInit {
  @Input() commentIds: number[];
  listComments: any = [];

  constructor(public activeModal: NgbActiveModal, public postsService: PostsService) { }

  ngOnInit() {
    this.getListComments();
  }

  getListComments(fromIndex?: number) {
    this.postsService.getListComments(this.commentIds, fromIndex)
      .subscribe(comment => {
        this.listComments.push(comment);
      });
  }

}
