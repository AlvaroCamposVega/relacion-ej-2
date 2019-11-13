import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService
{
  constructor(private httpClient: HttpClient) {}

  getJSON(): Observable<object>
  {
    return this.httpClient.get("/assets/json/cart.json");
  }

  addItem(item: object): Observable<any>
  {
    return this.httpClient.put("/assets/json/cart.json", item);
  }
}
