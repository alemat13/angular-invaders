import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InvadersComponent } from './invaders/invaders.component';
import { InvaderDetailComponent } from './invader-detail/invader-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { InvaderStatusPipe } from './invader-status.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, InvadersComponent, InvaderDetailComponent, InvaderStatusPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
