import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarijesiakHutsuneakBete2PageRoutingModule } from './marijesiak-hutsuneak-bete-2-routing.module';

import { MarijesiakHutsuneakBete2Page } from './marijesiak-hutsuneak-bete-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarijesiakHutsuneakBete2PageRoutingModule
  ],
  declarations: [MarijesiakHutsuneakBete2Page]
})
export class MarijesiakHutsuneakBete2PageModule {}
