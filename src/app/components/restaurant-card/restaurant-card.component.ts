import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {

  @Input() data: any;
  @Output() enterHome = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  restaurantHomePage(){
    this.enterHome.emit(this.data.menu);
  }

}
