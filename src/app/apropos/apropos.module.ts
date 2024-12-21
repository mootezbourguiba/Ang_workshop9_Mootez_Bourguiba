import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AproposRoutingModule } from './apropos-routing.module'; // Correction ici
import { AproposComponent } from './apropos/apropos.component'; // Correction ici

@NgModule({
  declarations: [
    AproposComponent
  ],
  imports: [
    CommonModule,
    AproposRoutingModule // Correction ici
  ]
})
export class AproposModule { } // Correction ici
