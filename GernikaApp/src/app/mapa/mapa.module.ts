import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapaPageRoutingModule } from './mapa-routing.module'; // Importa el módulo de rutas

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaPageRoutingModule, // Solo importa el módulo de rutas
  ]
})
export class MapaPageModule {}
