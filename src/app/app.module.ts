import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InvadersComponent } from './invaders/invaders.component';
import { InvaderDetailComponent } from './invader-detail/invader-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, InvadersComponent, InvaderDetailComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
