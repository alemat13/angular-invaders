import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Invader } from '../invader';
import { InvaderService } from '../invader.service';
import { User } from 'src/app/users/user';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-invader-detail',
  templateUrl: './invader-detail.component.html',
  styleUrls: ['./invader-detail.component.css'],
})
export class InvaderDetailComponent implements OnInit {
  @Input() invader?: Invader;
  users?: User[];
  constructor(
    private route: ActivatedRoute,
    private invaderService: InvaderService,
    private userService: UserService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getInvader();
    this.getUsers();
  }

  isFlashedBy(user: User) {
    let invader = user.invaders.filter(i => i.invader.id == this.invader?.id);
    return invader.length > 0;
  }

  selectUser($event: any, user: User): void {
    $event.target.disabled = true;
    let checked = $event.target.checked;
    if (checked && this.invader) {
      user.invaders.push({
        invader: this.invader,
        flashDate: new Date()
      })
    } else {
      user.invaders = user.invaders.filter(i => i.invader.id != this.invader?.id);
    }
    this.userService.updateUser(user).subscribe(
      _ => $event.target.disabled = false
    )
    console.log(user);
  }
  
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
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
