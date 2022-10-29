import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  cartQuantity = 0;
  constructor(cartService: CartService) {
    cartService.getCartObservable().subscribe((cart) => {
      this.cartQuantity = cart.items.length;
    });
  }

  ngOnInit(): void { }
}