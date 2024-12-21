import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormProductComponent } from './form-product/form-product.component';

@NgModule({
  declarations: [], // Vide car tous les composants sont standalone
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    // Importez les composants standalone ici
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FormProductComponent
  ],
  providers: [],
  bootstrap: [] // AppComponent reste dans bootstrap même s'il est standalone
})
export class AppModule { }