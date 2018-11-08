import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { KyleCardComponent } from './kyle-card/kyle-card.component';
import { KyleHomeComponent } from './kyle-home/kyle-home.component';
import { SpotifyLogoComponent } from './spotify-logo/spotify-logo.component';
import { InstagramLogoComponent } from './instagram-logo/instagram-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    KyleCardComponent,
    KyleHomeComponent,
    SpotifyLogoComponent,
    InstagramLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
