import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuDishComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  { path: 'home',  component:HomeComponent },
  { path: 'menu',  component:MenuDishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
