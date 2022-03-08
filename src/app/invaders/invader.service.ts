import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

import { Invader } from './invader';

@Injectable({
  providedIn: 'root',
})
export class InvaderService {

  private invadersUrl = 'api/invaders';

  constructor(private http: HttpClient) {}

  getInvader(id: string): Observable<Invader>  {
    const url = `${this.invadersUrl}/${id}`;
    return this.http.get<Invader>(url).pipe(
      tap(_ => this.log(`fetch invader ${id}`)),
      catchError(this.handleError<Invader>('getInvader'))
    );
  }

  getInvaders(): Observable<Invader[]> {
    return this.http.get<Invader[]>(this.invadersUrl).pipe(
      tap(_ => this.log('fetched invaders')),
      catchError(this.handleError<Invader[]>('getInvaders', []))
    )
  }

  updateInvader(invader: Invader): Observable<Invader> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.http.put<Invader>(this.invadersUrl, invader, httpOptions).pipe(
      tap(_ => this.log(`updated invader ${invader.id}`)),
      catchError(this.handleError<Invader>('updated invader'))
    )
  }

  deleteInvader(invader: Invader): Observable<Invader> {
    const url = `${this.invadersUrl}/${invader.id}`;
    const httpOptions = {
      'headers': new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.http.delete<Invader>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted invader ${invader.id}`)),
      catchError(this.handleError<Invader>('deleted invader'))
    )
  }

  private log(log: string): void {
    console.info(log);
  }
  
  handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
