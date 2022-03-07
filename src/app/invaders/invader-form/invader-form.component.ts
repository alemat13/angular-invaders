import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvaderService } from '../invader.service';
import { Invader } from '../invader';
import { User } from 'src/app/users/user';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-invader-form',
  templateUrl: './invader-form.component.html',
  styleUrls: ['./invader-form.component.css']
})
export class InvaderFormComponent implements OnInit {
  @Input() invader?: Invader;
  users?: User[];
  constructor(
    private invaderService: InvaderService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  isFlashedBy(user: User) {
    let invader = user.invaders.filter(i => i.invader == this.invader);
    return invader.length > 0;
  }

  selectUser($event: any, user: User): void {
    let checked = $event.target.checked;
    if (checked && this.invader) {
      user.invaders.push({
        invader: this.invader,
        flashDate: new Date()
      })
    } else {
      user.invaders.splice(
        user.invaders.findIndex(i => i.invader == this.invader)
        , 1
      )
    }
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  onSubmit(): void {
    console.log("Submit form!");
    let link = ['invader'];
    if (this.invader) {
      link.push(this.invader.id);
    }
    this.router.navigate(link);
  }

  isStatusValid(status: string): boolean {
    if (status = "") return true;
    if ((status + 0) in [0, 1, 2, 3, 4, 5]) return true;
    return false;
  }

  isPointsValid(points: string): boolean {
    if (points = "") return true;
    if ((points + 0) in [10, 20, 30, 40, 50, 100]) return true;
    return false;
  }

}
