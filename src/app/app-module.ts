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
import { PlantillaFuncionSimple } from './components/plantilla-funcion-simple/plantilla-funcion-simple';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServicePlantillas } from './services/service.plantillas';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, PersonasApiComponent, CochesComponent, PlantillaFuncionSimple, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, PersonasStandaloneComponent, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersonas,
    ServiceCoches,
    ServicePlantillas,
  ],
  bootstrap: [App],
})
export class AppModule {}
