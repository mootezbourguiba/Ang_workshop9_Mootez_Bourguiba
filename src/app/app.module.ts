// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './product/products/products.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ContactComponent } from './contact/contact/contact.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProfileComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
