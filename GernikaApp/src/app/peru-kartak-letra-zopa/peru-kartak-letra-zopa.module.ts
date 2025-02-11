import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeruKartakLetraZopaPageRoutingModule } from './peru-kartak-letra-zopa-routing.module';

import { PeruKartakLetraZopaPage } from './peru-kartak-letra-zopa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeruKartakLetraZopaPageRoutingModule
  ],
  declarations: [PeruKartakLetraZopaPage]
})
export class PeruKartakLetraZopaPageModule {}
