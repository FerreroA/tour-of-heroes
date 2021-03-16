import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroeDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
