import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../core/types/post';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalCommentsComponent } from '../../modals/modal-comments/modal-comments.component';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: IPost;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openComments(event) {
    event.preventDefault();

    const modalRef = this.modalService.open(ModalCommentsComponent, { ariaLabelledBy: 'modal-basic-title' });
    modalRef.componentInstance.commentIds = this.post.kids;
  }

}
