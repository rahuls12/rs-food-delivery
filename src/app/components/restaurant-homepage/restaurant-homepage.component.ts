import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-restaurant-homepage',
  templateUrl: './restaurant-homepage.component.html',
  styleUrls: ['./restaurant-homepage.component.css']
})
export class RestaurantHomepageComponent implements OnInit {

  @Input() menu: any;
  @Output() goback = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  homepage() {
    this.goback.emit();
  }
}
