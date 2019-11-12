import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ejercicio06To08Page } from './ejercicio06-to08.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio06To08Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ejercicio06To08Page]
})
export class Ejercicio06To08PageModule {}
