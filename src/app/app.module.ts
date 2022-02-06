import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InvadersModule } from './invaders/invaders.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, InvadersModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
