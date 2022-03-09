import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/users/user';
import { UserService } from 'src/app/users/user.service';
import { Invader } from '../invader';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() invader?: Invader;
  users?: User[];
  constructor(
    private userService: UserService
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
}
