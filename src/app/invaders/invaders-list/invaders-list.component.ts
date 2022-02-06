import { Component, OnInit } from '@angular/core';
import { Invader } from 'src/app/invader';
import { InvaderService } from 'src/app/invader.service';
import { InvaderStatusPipe } from 'src/app/invader-status.pipe';

@Component({
  selector: 'app-invaders',
  templateUrl: './invaders.component.html',
  styleUrls: ['./invaders.component.css'],
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
