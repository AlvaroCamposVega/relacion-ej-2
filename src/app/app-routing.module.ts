import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'ejercicio05', loadChildren: './pages/ejercicio05/ejercicio05.module#Ejercicio05PageModule' },
  { path: 'edit', loadChildren: './pages/edit/edit.module#EditPageModule' },
  { path: 'edit/:id', loadChildren: './pages/edit/edit.module#EditPageModule' },
  { path: 'ejercicio06-to08', loadChildren: './pages/ejercicio06-to08/ejercicio06-to08.module#Ejercicio06To08PageModule' },
  { path: 'ejercicio03', loadChildren: './pages/ejercicio03/ejercicio03.module#Ejercicio03PageModule' },
  { path: 'ejercicio04', loadChildren: './pages/ejercicio04/ejercicio04.module#Ejercicio04PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
