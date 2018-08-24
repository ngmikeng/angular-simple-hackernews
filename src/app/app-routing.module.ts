import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
