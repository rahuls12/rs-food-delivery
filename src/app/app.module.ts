import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { RestaurantHomepageComponent } from './components/restaurant-homepage/restaurant-homepage.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantCardComponent,
    RestaurantHomepageComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
