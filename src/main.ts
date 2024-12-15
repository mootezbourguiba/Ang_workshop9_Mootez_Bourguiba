import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './app/product/products/products.component';
import { ProfileComponent } from './app/profile/profile/profile.component';
import { ContactComponent } from './app/contact/contact/contact.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule),
    ProductsComponent,
    ProfileComponent,
    ContactComponent
  ]
}).catch(err => console.error(err));
