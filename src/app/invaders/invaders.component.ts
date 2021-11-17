import { Component, OnInit } from '@angular/core';
import { Invader } from '../invader';
import { INVADERS } from '../mock-invaders';

@Component({
  selector: 'app-invaders',
  templateUrl: './invaders.component.html',
  styleUrls: ['./invaders.component.css'],
})
export class InvadersComponent implements OnInit {
  invaders = INVADERS;
  selectedInvader?: Invader;
  constructor() {}

  ngOnInit() {}
  onSelect(invader: Invader): void {
    this.selectedInvader = invader;
  }
}
