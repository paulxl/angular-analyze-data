import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayStatePopsComponent } from './display-state-pops/display-state-pops.component';
import { BarD3Component } from './bar-d3/bar-d3.component';
import { PieD3Component } from './pie-d3/pie-d3.component';
import { ScatterD3Component } from './scatter-d3/scatter-d3.component';
import { LodashPlayComponent } from './lodash-play/lodash-play.component';

const routes: Routes = [
  { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'state-pops', component: DisplayStatePopsComponent },
  { path: 'barD3', component: BarD3Component },
  { path: 'pieD3', component: PieD3Component },
  { path: 'scatterD3', component: ScatterD3Component },
  { path: 'lodash', component: LodashPlayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
