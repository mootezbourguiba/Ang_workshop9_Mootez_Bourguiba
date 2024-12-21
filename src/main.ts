import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule, routes } from './app/app-routing.module';

// Importez les composants standalone
import { HomeComponent } from './app/home/home.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { FormProductComponent } from './app/form-product/form-product.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(AppRoutingModule),
    importProvidersFrom(HomeComponent),
    importProvidersFrom(HeaderComponent),
    importProvidersFrom(FooterComponent),
    importProvidersFrom(FormProductComponent)
  ]
})
.catch(err => console.error(err));
