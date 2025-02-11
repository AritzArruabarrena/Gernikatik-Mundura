import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaPage } from './mapa.page'; // Importa el componente standalone

const routes: Routes = [
  {
    path: '',
    component: MapaPage // Usar el componente directamente aquí
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapaPageRoutingModule {}
