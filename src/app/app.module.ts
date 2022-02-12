import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InvadersModule } from './invaders/invaders.module';
import { UsersModule } from './users/users.module';

@NgModule({
  imports: [
    BrowserModule,
    InvadersModule,
    UsersModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
