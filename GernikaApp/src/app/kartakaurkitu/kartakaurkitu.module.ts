import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KartakaurkituPageRoutingModule } from './kartakaurkitu-routing.module';

import { KartakaurkituPage } from './kartakaurkitu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KartakaurkituPageRoutingModule
  ],
  declarations: [KartakaurkituPage] 
})
export class KartakaurkituPageModule {}
