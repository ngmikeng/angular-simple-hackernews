import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  declarations: [PostListComponent, PostItemComponent]
})
export class PostsModule { }
