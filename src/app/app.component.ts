import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Importez HeaderComponent
import { FooterComponent } from './footer/footer.component'; // Importez FooterComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent] // Ajoutez les imports ici
})
export class AppComponent { }
