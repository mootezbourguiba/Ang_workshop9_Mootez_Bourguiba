<<<<<<< HEAD
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environments';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule, routes } from './app/app-routing.module';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

if (environment.production) {
  enableProdMode();
}

@NgModule({
  imports: [
    ServerModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}

export default AppServerModule;
=======
export { AppServerModule as default } from './app/app.module.server';
>>>>>>> 407d56a5de5f48c4e8f1f3290d9b3f8795e1e259
