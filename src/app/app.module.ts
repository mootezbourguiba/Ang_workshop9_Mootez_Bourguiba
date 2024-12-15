import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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
