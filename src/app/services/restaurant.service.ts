import { Injectable } from '@angular/core';
import * as RestaurantData from '../../assets/json/data.json';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  getRestaurants() {
    const url: string = '/assests/json/data.json';
    return JSON.parse(JSON.stringify(RestaurantData));
  }
}
