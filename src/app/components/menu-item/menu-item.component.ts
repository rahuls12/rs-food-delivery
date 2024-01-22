import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  primaryBtn: boolean;
  count = 0;
  @Input() menuItem: any;
  @Output() cartValChange = new EventEmitter();
  constructor() {
    this.primaryBtn = true;
  }

  ngOnInit(): void {
  }
  add() {
    this.primaryBtn = false;
    this.count++;
    this.cartValChange.emit(this.menuItem.price);
  }

  increment() {
    this.count++;
    this.cartValChange.emit(this.menuItem.price);
  }

  decrement() {
    this.count--;
    this.cartValChange.emit(-this.menuItem.price);
    this.count == 0 ? this.primaryBtn = true : "";
  }
}
