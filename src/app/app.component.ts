import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
=======
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Importez HeaderComponent
import { FooterComponent } from './footer/footer.component'; // Importez FooterComponent
>>>>>>> 407d56a5de5f48c4e8f1f3290d9b3f8795e1e259

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'Mon Application';
}
=======
  imports: [RouterModule, HeaderComponent, FooterComponent] // Ajoutez les imports ici
})
export class AppComponent { }
>>>>>>> 407d56a5de5f48c4e8f1f3290d9b3f8795e1e259
