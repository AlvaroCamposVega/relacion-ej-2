import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit 
{
  cart: any = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit()
  {
    this.cartService.getJSON("cart.json").subscribe(
      data => {
        this.cart = data;

        this.cart.forEach(element => 
          this.total += element.price * element.quantity
        );
      }
    );
  }

}
