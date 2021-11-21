import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvadersComponent } from './invaders/invaders.component'
import { InvaderDetailComponent } from './invader-detail/invader-detail.component';

const routes: Routes = [
  { path: '', redirectTo: "/invaders", pathMatch: 'full' },
  { path: 'invaders', component: InvadersComponent },
  { path: 'detail/:id', component: InvaderDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
