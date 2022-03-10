import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InvadersModule } from './invaders/invaders.module';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './login/login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    InvadersModule,
    UsersModule,
    LoginModule,
    AppRoutingModule,
    FormsModule, 
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
