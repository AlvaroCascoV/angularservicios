import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantillaFuncionSimple } from './components/plantilla-funcion-simple/plantilla-funcion-simple';
import { CochesComponent } from './components/coches-component/coches-component';

const routes: Routes = [
  { path: '', component: CochesComponent },
  { path: 'plantillas', component: PlantillaFuncionSimple },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
