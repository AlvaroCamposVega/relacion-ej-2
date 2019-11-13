import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.page.html',
  styleUrls: ['./ejercicio01.page.scss'],
})
export class Ejercicio01Page implements OnInit
{
  a = 0;
  b = 0;
  randomNumber = 0;

  constructor() {}

  ngOnInit() {}

  generateNumber()
  {
    this.randomNumber = +this.a + Math.floor(
      Math.random() * (this.b - this.a + 1)
    );
  }

  changeNumber()
  {
    if (this.randomNumber === this.a)
    {
      this.randomNumber = this.b;

    } else if (this.randomNumber === this.b)
    {
      this.randomNumber = this.a;

    } else
    {
      this.randomNumber = this.a;
    }
  }
}
