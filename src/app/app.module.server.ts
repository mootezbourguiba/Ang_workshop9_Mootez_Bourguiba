import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
<<<<<<< HEAD

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
=======
import { provideServerRoutesConfig } from '@angular/ssr';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [provideServerRoutesConfig(serverRoutes)],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
>>>>>>> 407d56a5de5f48c4e8f1f3290d9b3f8795e1e259
