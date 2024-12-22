import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
=======
>>>>>>> 407d56a5de5f48c4e8f1f3290d9b3f8795e1e259
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { FormProductComponent } from './form-product/form-product.component';
import { CardComponent } from './card/card.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [
    CardComponent,
    ListUserComponent
  ], // Vide car tous les composants sont standalone
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
=======
import { AppRoutingModule } from './app-routing.module';  // Assurez-vous que AppRoutingModule est importé

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RouterModule
  ],
  declarations: [
    // Vous ne déclarez pas AppComponent ici car il est standalone
  ],
  providers: []
})
export class AppModule { }
>>>>>>> 407d56a5de5f48c4e8f1f3290d9b3f8795e1e259
