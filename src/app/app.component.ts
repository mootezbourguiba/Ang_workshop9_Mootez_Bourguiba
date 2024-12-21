import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Ajouter CommonModule
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Importez HeaderComponent
import { FooterComponent } from './footer/footer.component'; // Importez FooterComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent] // Ajoutez les imports ici
})
export class AppComponent {
  title = 'Mon Application';  // Ajoutez cette ligne si nécessaire
}
