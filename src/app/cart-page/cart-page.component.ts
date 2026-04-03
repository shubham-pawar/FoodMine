import { Component, OnInit, inject } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule, RouterModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartService = inject(CartService);
  cart!: Cart;

  ngOnInit(): void {
    this.setCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString, 10);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }
}