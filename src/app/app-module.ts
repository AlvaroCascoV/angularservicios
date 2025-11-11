import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api.component/personas-api.component';
import { ServicePersonas } from './services/service.personas';
import { PersonasStandaloneComponent } from './components/personas-standalone-component/personas-standalone-component';
import { ServiceCoches } from './services/service.coches';
import { CochesComponent } from './components/coches-component/coches-component';

@NgModule({
  declarations: [App, PersonasApiComponent, CochesComponent],
  imports: [BrowserModule, AppRoutingModule, PersonasStandaloneComponent],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersonas,
    ServiceCoches,
  ],
  bootstrap: [App],
})
export class AppModule {}
