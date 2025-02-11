import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalderakErantzutenPageRoutingModule } from './galderak-erantzuten-routing.module';

import { GalderakErantzutenPage } from './galderak-erantzuten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalderakErantzutenPageRoutingModule
  ],
  declarations: [GalderakErantzutenPage]
})
export class GalderakErantzutenPageModule {}
