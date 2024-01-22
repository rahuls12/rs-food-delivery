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
  displayMenuComp: any;
  menu: any;
  constructor(private restaurantService: RestaurantService){}
  
  ngOnInit(): void {
    this.displayMenuComp = false;
    this.restaurants=this.restaurantService.getRestaurants().restaurants;
  }

  displayMenu(e: any){
    this.displayMenuComp = true;
    this.menu=e;
  }

  backToHomePage(){
    this.displayMenuComp = false;
  }
}
