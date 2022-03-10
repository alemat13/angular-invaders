import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string = 'You are disconnected (admin/admin)';

  user: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  setMessage(): void {
    this.message = this.authService.isLoggedIn ? 'You are connected' : 'user/password incorrect';
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  login(): void {
    this.message = "Connection pending...";
    this.authService.login(this.user, this.password).subscribe(() => {
      this.setMessage();
      if(this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl || '/pokemon/all';
        this.router.navigate([redirect]);
      }
      else {
        this.password = '';
      }
    })
  }

  logout(): void {
    this.authService.logout();
    this.setMessage();
  }

}
