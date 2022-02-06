import { Component, OnInit } from '@angular/core';
import { Invader } from '../invader';
import { InvaderService } from '../invader.service';
import { InvaderStatusPipe } from '../invader-status.pipe';

@Component({
  selector: 'app-invaders',
  templateUrl: './invaders-list.component.html',
  styleUrls: ['./invaders-list.component.css'],
})
export class InvadersListComponent implements OnInit {
  invaders: Invader[] = [];
  title: string = "My Invaders";
  constructor(private invaderService: InvaderService) {}

  ngOnInit() {
    this.getInvaders();
  }

  getInvaders(): void {
    this.invaderService
      .getInvaders()
      .subscribe((invaders) => (this.invaders = invaders));
  }
}
