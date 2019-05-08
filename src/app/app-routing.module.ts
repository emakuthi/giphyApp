import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CartoonsComponent } from './cartoons/cartoons.component'
import { TrendingComponent } from './trending/trending.component'
import { PoliticsComponent } from './politics/politics.component'
import { SportsComponent } from './sports/sports.component'
import { HomeComponent } from './home/home.component'



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'cartoons', component: CartoonsComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'nav', component: NavComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
