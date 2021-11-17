import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Invader } from '../invader';

@Component({
  selector: 'app-invader-detail',
  templateUrl: './invader-detail.component.html',
  styleUrls: ['./invader-detail.component.css'],
})
export class InvaderDetailComponent implements OnInit {
  @Input() invader?: Invader;
  constructor() {}

  ngOnInit() {}
}
