// src/app/profile/profile.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module'; // Importez ProfileRoutingModule

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule // Ajoutez ProfileRoutingModule ici
  ]
})
export class ProfileModule { }
