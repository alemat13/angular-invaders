import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InvadersRoutingModule } from './invaders-routing.module';
import { InvadersListComponent } from './invaders-list/invaders-list.component';
import { InvaderDetailComponent } from './invader-detail/invader-detail.component';
import { InvaderStatusPipe } from './invader-status.pipe';
import { InvaderFormComponent } from './invader-form/invader-form.component';
import { EditInvaderComponent } from './edit-invader/edit-invader.component';

@NgModule({
  declarations: [InvadersListComponent, InvaderDetailComponent, InvaderStatusPipe, InvaderFormComponent, EditInvaderComponent],
  imports: [
    CommonModule,
    InvadersRoutingModule,
    FormsModule
  ]
})
export class InvadersModule { }
