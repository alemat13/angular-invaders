import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Invaders Manager';
  constructor(
    private header_title: Title,
    private router: Router
  ) {}
  ngOnInit() {
    this.header_title.setTitle('Invaders Manager - Home page');
  }
  goToInvaders(): void {
    this.router.navigate(['/invader/all']);
  }
  goToUsers(): void {
    this.router.navigate(['/users']);
  }
}
