import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Invader } from '../invader';
import { InvaderService } from '../invader.service';

@Component({
  selector: 'app-invader-detail',
  templateUrl: './invader-detail.component.html',
  styleUrls: ['./invader-detail.component.css'],
})
export class InvaderDetailComponent implements OnInit {
  public editMode = false;
  @Input() invader?: Invader;
  constructor(
    private route: ActivatedRoute,
    private invaderService: InvaderService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getInvader();
  }

  getInvader(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.invaderService.getInvader(id)
      .subscribe(invader => this.invader = invader);
  }

  public save(): void {
    console.log('invader saved!');
    this.editMode = false;
  }
  public edit(): void {
    this.editMode = true;
  }
  goBack(): void {
    this.location.back();
  }
  goEdit(invader: Invader): void {
    let link = ['/invader/edit', invader.id];
    this.router.navigate(link);
  }
}
