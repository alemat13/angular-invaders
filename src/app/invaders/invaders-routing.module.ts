import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvadersListComponent } from './invaders-list/invaders-list.component';
import { EditInvaderComponent } from './edit-invader/edit-invader.component';
import { InvaderDetailComponent } from './invader-detail/invader-detail.component';
import { AuthGuardService } from '../auth-guard.service';

const routes: Routes = [
  {
    path: 'invader',
    canActivate: [AuthGuardService],
    children: [
      { path: 'all', component: InvadersListComponent },
      { path: 'edit/:id', component: EditInvaderComponent, canActivate: [AuthGuardService] },
      { path: ':id', component: InvaderDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvadersRoutingModule { }
