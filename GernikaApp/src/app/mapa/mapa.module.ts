import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MapaPageRoutingModule } from './mapa-routing.module';
import { MapaPage } from './mapa.page'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaPageRoutingModule,
    MapaPage 
  ]
})
export class MapaPageModule {}
