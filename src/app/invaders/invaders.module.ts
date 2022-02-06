import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InvadersRoutingModule } from './invaders-routing.module';
import { InvadersListComponent } from './invaders-list/invaders-list.component';
import { InvaderDetailComponent } from './invader-detail/invader-detail.component';
import { InvaderStatusPipe } from './invader-status.pipe';

@NgModule({
  declarations: [InvadersListComponent, InvaderDetailComponent, InvaderStatusPipe],
  imports: [
    CommonModule,
    InvadersRoutingModule,
    FormsModule
  ]
})
export class InvadersModule { }
