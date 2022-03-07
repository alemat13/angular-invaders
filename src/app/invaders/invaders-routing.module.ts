import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvadersListComponent } from './invaders-list/invaders-list.component';
import { EditInvaderComponent } from './edit-invader/edit-invader.component';
import { InvaderDetailComponent } from './invader-detail/invader-detail.component';

const routes: Routes = [
  { path: 'invaders', component: InvadersListComponent },
  { path: 'invader/edit/:id', component: EditInvaderComponent },
  { path: 'invader-detail/:id', component: InvaderDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvadersRoutingModule { }
