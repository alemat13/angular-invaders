import { Component, OnInit } from '@angular/core';
import { Invader } from '../invader';
import { InvaderService } from '../invader.service';

@Component({
  selector: 'app-invaders',
  templateUrl: './invaders.component.html',
  styleUrls: ['./invaders.component.css'],
})
export class InvadersComponent implements OnInit {
  invaders: Invader[];
  selectedInvader?: Invader;
  constructor(private invaderService: InvaderService) {}

  ngOnInit() {
    this.getInvaders();
  }
  onSelect(invader: Invader): void {
    this.selectedInvader = invader;
  }
  getInvaders(): void {
    this.invaderService
      .getInvaders()
      .subscribe((invaders) => (this.invaders = invaders));
  }
}
