import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListUserComponent } from './list-user/list-user.component'; // Importez ListUserComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ListCategoriesComponent,
    ListProductsComponent,
    ListUserComponent // Ajoutez ListUserComponent ici
  ]
})
export class AppComponent {
  title = 'Mon Application'; // Ajoutez cette ligne si nécessaire
}
