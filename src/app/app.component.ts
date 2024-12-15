// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, HomeComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProjectMootezBourguiba';
}
