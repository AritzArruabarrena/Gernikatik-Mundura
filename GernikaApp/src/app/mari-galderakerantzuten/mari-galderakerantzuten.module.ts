import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MariGalderakerantzutenPageRoutingModule } from './mari-galderakerantzuten-routing.module';

import { MariGalderakerantzutenPage } from './mari-galderakerantzuten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MariGalderakerantzutenPageRoutingModule
  ],
  declarations: [MariGalderakerantzutenPage]
})
export class MariGalderakerantzutenPageModule {}
