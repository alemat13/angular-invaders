import { Invader } from "../invaders/invader";

export interface User {
    id: number;
    name: string;
    invaders: {
       id: string,
       flashDate?: Date 
    }[]
}
