import { User } from './user';
import { Invader } from '../invaders/invader';
import { INVADERS } from '../invaders/mock-invaders';

function getInvader(id: string): Invader {
  return INVADERS.filter((inv) => inv.id == id)[0];
}

export const USERS: User[] = [
  {
    id: 1,
    name: "Alex",
    invaders: [
      {invader: getInvader('PA_01')},
      {invader: getInvader('PA_02'), flashDate: new Date('23-01-2022')},
    ]
  },
  {
    id: 2,
    name: "Olivia",
    invaders: [
      {invader: getInvader('PA_02')},
    ]
  },
];
