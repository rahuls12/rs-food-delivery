import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="Rahul's Food Delivery";
  restaurants: any;
  constructor(private restaurantService: RestaurantService){}
  
  ngOnInit(): void {
    this.restaurants=this.restaurantService.getRestaurants().restaurants;
  }
}
