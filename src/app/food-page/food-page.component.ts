import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TagsComponent } from "../tags/tags.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-food-page',
  imports: [CommonModule, RouterModule, TagsComponent, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  food!: Food;

  // Use inject() instead of constructor injection
  private activatedRoute = inject(ActivatedRoute);
  private foodService = inject(FoodService);
  private cartService = inject(CartService);
  private router = inject(Router);

  constructor() {
    // Subscribe to route params
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.food = this.foodService.getFoodByID(params['id']);
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}