import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Invader } from '../invader';
import { InvaderService } from '../invader.service';

@Component({
  selector: 'app-search-invaders',
  templateUrl: './search-invaders.component.html',
  styleUrls: ['./search-invaders.component.css']
})
export class SearchInvadersComponent implements OnInit {

  private searchTerms = new Subject<string>();
  invaders$?: Observable<Invader[]>;

  constructor(
    invaders$: Observable<Invader[]>,
    private invaderService: InvaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.invaders$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.invaderService.searchInvaders(term))
    )
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(invader: Invader): void {
    let link = ['/invader', invader.id];
    this.router.navigate(link);
  }

}
