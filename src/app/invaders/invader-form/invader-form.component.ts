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
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
