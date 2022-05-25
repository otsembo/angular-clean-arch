import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//network services
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { MaterialModules } from '../material/material.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './presentation/components/navbar/navbar.component';
import { UsersComponent } from './presentation/components/users/users.component';
import { ImagesComponent } from './presentation/components/images/images.component';
import { HomeComponent } from './presentation/components/home/home.component';
import { FetchImageServiceService } from './domain/use_cases/fetch-images/fetch-image-service.service';
import { FetchUserServiceService } from './domain/use_cases/fetch-users/fetch-user-service.service';
import { AppRepository } from './data/repository/AppRepository';




@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModules,
  ],

  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    ImagesComponent,
    HomeComponent,
  ],
  providers: [FetchImageServiceService, FetchUserServiceService, AppRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
