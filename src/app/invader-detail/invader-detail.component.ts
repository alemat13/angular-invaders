import { Component, OnInit, Input } from '@angular/core';
import { Invader } from '../invader';

@Component({
  selector: 'app-invader-detail',
  templateUrl: './invader-detail.component.html',
  styleUrls: ['./invader-detail.component.css'],
})
export class InvaderDetailComponent implements OnInit {
  public editMode = false;
  @Input() invader?: Invader;
  constructor() {}

  ngOnInit() {}
  public getButtonLabel(): string {
    return this.editMode ? "Save" : "Edit";
  }
  public save(): void {
    console.log('invader saved!');
    this.editMode = false;
  }
  public edit(): void {
    this.editMode = true;
  }
}
