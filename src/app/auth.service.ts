import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  redirectUrl: string = '';

  constructor() {}

  login(login: string, password: string): Observable<boolean> {
    let isLoggedIn = (login == 'admin' && password == 'admin');
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = isLoggedIn)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
