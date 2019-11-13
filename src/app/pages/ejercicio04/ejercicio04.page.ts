import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-ejercicio04',
  templateUrl: './ejercicio04.page.html',
  styleUrls: ['./ejercicio04.page.scss'],
})
export class Ejercicio04Page implements OnInit 
{
  cart: any = [];
  total: number = 0;
  // User input
  item: string = "";
  price: number = 0;
  quantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit()
  {
    this.getItems();
  }

  getItems()
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
  
  addItem(item: string, price: number, quantity: number)
  {
    if (item != "" && quantity != 0)
    {
      let itemToSave = {
        item: item,
        price: price,
        quantity: quantity
      };

      /* this.cartService.addItem(itemToSave).subscribe(
        () => this.getItems()
      ); */
      
      this.cart.push(itemToSave);
      this.total += itemToSave.price * itemToSave.quantity;

    } else
    {
      console.log("Por favor rellene los campos");
    }
  }

}
