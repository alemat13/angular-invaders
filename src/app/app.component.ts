import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Invaders Manager';
  constructor(
    private header_title: Title
  ) {}
  ngOnInit() {
    this.header_title.setTitle('Invaders Manager - Home page');
  }
}
