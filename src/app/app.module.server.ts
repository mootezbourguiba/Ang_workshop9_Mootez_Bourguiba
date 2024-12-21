import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

@NgModule({
  imports: [
    ServerModule,
    // Importez les modules nécessaires ici
  ],
  declarations: [
    // Déclarez les composants si nécessaire
  ],
  // Pas besoin de tableau bootstrap ici pour les composants standalone
})
export class AppServerModule { }
