import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantHomepageComponent } from './restaurant-homepage.component';

describe('RestaurantHomepageComponent', () => {
  let component: RestaurantHomepageComponent;
  let fixture: ComponentFixture<RestaurantHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
