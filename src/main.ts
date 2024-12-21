import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD
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
=======
import { routes } from './app/app-routing.module';  // Importer routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
>>>>>>> 407d56a5de5f48c4e8f1f3290d9b3f8795e1e259
  ]
})
.catch(err => console.error(err));
