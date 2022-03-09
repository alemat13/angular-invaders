import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvaderService } from '../invader.service';
import { Invader } from '../invader';

@Component({
  selector: 'app-invader-form',
  templateUrl: './invader-form.component.html',
  styleUrls: ['./invader-form.component.css']
})
export class InvaderFormComponent implements OnInit {
  @Input() invader?: Invader;
  pointsOptions = [10, 20, 30, 40, 50, 100];
  statusOptions = {
    0: "Destroyed",
    1: "Non visible",
    2: "Very deteriorated",
    3: "Deteriorated",
    4: "Slighlty deteriorated",
    5: "Good"
  }
  constructor(
    private invaderService: InvaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("Submit form!");
    if(this.invader) {
      this.invaderService.updateInvader(this.invader)
        .subscribe(_ => this.goBack());
    }
  }

  goBack(): void {
    let link = [];
    if (this.invader) {
      link = ['invader', this.invader.id]
    }
    else {
      link = ['invaders'];
    }
    this.router.navigate(link);
  }
}
