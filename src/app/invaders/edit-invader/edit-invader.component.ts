import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Invader } from '../invader';
import { InvaderService } from '../invader.service';

@Component({
  selector: 'app-edit-invader',
  templateUrl: './edit-invader.component.html',
  styleUrls: ['./edit-invader.component.css']
})
export class EditInvaderComponent implements OnInit {
  invader?: Invader = undefined;
  constructor(
    private route: ActivatedRoute,
    private invaderService: InvaderService
  ) { }

  ngOnInit(): void {
    this.getInvader();
  }

  getInvader(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.invaderService.getInvader(id)
      .subscribe(invader => this.invader = invader);
  }

}
