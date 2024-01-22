import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantHomepageComponent } from './components/restaurant-homepage/restaurant-homepage.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path: 'restaurant/:name', component: RestaurantHomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
