import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(id: number): Observable<User> {
    const user = USERS.find(i => i.id === id)!;
    return of(user);
  }

  constructor() { }
  getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
  }
}
