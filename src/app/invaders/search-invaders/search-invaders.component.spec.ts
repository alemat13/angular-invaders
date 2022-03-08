import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInvadersComponent } from './search-invaders.component';

describe('SearchInvadersComponent', () => {
  let component: SearchInvadersComponent;
  let fixture: ComponentFixture<SearchInvadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInvadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInvadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
