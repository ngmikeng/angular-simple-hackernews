import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'top', component: PostListComponent },
  { path: 'new', component: PostListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class PostsRoutingModule { }
