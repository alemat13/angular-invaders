import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { INVADERS } from './invaders/mock-invaders';
import { USERS } from './users/mock-users';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let invaders = INVADERS;
    let users = USERS;
    return { invaders, users };
  }
}
