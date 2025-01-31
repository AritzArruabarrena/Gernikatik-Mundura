import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HizkisopaPageRoutingModule } from './hizkisopa-routing.module';

import { HizkisopaPage } from './hizkisopa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HizkisopaPageRoutingModule
  ],
  declarations: [HizkisopaPage]
})
export class HizkisopaPageModule {}
