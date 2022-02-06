import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvadersListComponent } from './invaders-list/invaders-list.component';
import { InvaderDetailComponent } from './invader-detail/invader-detail.component';

@NgModule({
  declarations: [InvadersListComponent, InvaderDetailComponent],
  imports: [
    CommonModule
  ]
})
export class InvadersModule { }
