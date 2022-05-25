import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './presentation/components/home/home.component';
import { ImagesComponent } from './presentation/components/images/images.component';
import { NavbarComponent } from './presentation/components/navbar/navbar.component';
import { UsersComponent } from './presentation/components/users/users.component';

const routes: Routes = [
   {path: '', 
    children : [
      {path: '', component:HomeComponent},
      {path: 'users', component:UsersComponent},
      {path: 'images', component:ImagesComponent}
    ]
   },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
