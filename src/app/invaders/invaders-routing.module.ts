import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvadersListComponent } from './invaders-list/invaders-list.component';
import { InvaderDetailComponent } from './invader-detail/invader-detail.component';

const routes: Routes = [
  { path: '', redirectTo: "/invaders", pathMatch: 'full' },
  { path: 'invaders', component: InvadersListComponent },
  { path: 'detail/:id', component: InvaderDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvadersRoutingModule { }
