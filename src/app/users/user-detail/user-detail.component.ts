import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invader } from 'src/app/invaders/invader';
import { InvaderService } from 'src/app/invaders/invader.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  invaders?: Invader[];
  user?: User;
  constructor(
    private invaderService: InvaderService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getInvaders();
  }

  private getUser() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.userService.getUser(id as unknown as number).subscribe(
      user => this.user = user
    );
  }

  private getInvaders(): void {
    this.invaderService.getInvaders().subscribe(
      invaders => this.invaders = invaders
    )
  }

  isFlashed(invader: Invader): boolean {
    if (!this.user) return false;
    return this.user.invaders.filter(i => i.id == invader.id).length > 0;
  }

  selectInvader($event: any, invader: Invader): void {
    if(!this.user) return;
    $event.target.disabled = true;
    let checked = $event.target.checked;
    if (checked) {
      this.user.invaders.push({
        id: invader.id,
        flashDate: new Date()
      })
    } else {
      this.user.invaders = this.user.invaders.filter(i => i.id != invader?.id);
    }
    this.userService.updateUser(this.user).subscribe(
      _ => $event.target.disabled = false
    )
    console.log(this.user);
  }

  goDetail(invader: Invader) {
    let link = ['invader/', invader.id];
    this.router.navigate(link);
  }

}
