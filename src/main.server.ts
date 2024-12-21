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