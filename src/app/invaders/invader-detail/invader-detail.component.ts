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

  deleteInvader(): void {
    if (!this.invader) return;
    this.invaderService.deleteInvader(this.invader).subscribe(
      _ => this.goBack()
    )
  }

  goBack(): void {
    this.location.back();
  }

  goEdit(): void {
    if (!this.invader) return;
    let link = ['/invader/edit', this.invader.id];
    this.router.navigate(link);
  }
}
