import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from '../images/images.component';
import { UsersComponent } from '../users/users.component';
import { NavbarComponent } from './navbar.component';


const routes: Routes = [
   {path: '/app', component:NavbarComponent,
    children : [
      {path: '/users', component:UsersComponent},
      {path: '/images', component:ImagesComponent}
    ]
   },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavBarRouting { }
