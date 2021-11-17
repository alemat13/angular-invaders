import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Invader } from './invader';
import { INVADERS } from './mock-invaders';

@Injectable({
  providedIn: 'root',
})
export class InvaderService {
  constructor() {}
  getInvaders(): Observable<Invader[]> {
    const invaders = of(INVADERS);
    return invaders;
  }
}
