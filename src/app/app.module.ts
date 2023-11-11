import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { DisplayStatePopsComponent } from './display-state-pops/display-state-pops.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LodashPlayComponent } from './lodash-play/lodash-play.component';
import { BarD3Component } from './bar-d3/bar-d3.component';
import { PieD3Component } from './pie-d3/pie-d3.component';
import { ScatterD3Component } from './scatter-d3/scatter-d3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LodashPlayComponent,
    BarD3Component,
    PieD3Component,
    ScatterD3Component,

  ],
  imports: [
    DisplayStatePopsComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
