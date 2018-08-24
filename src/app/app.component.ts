import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listMenus = [
    { title: 'Top', route: '/posts/top' },
    { title: 'New', route: '/posts/new' },
    { title: 'Show', route: '/posts/show' },
    { title: 'Ask', route: '/posts/ask' },
    { title: 'Job', route: '/posts/job' }
  ];
}
