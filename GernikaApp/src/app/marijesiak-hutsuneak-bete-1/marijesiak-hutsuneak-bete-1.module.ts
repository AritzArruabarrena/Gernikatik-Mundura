import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarijesiakHutsuneakBete1PageRoutingModule } from './marijesiak-hutsuneak-bete-1-routing.module';

import { MarijesiakHutsuneakBete1Page } from './marijesiak-hutsuneak-bete-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarijesiakHutsuneakBete1PageRoutingModule
  ],
  declarations: [MarijesiakHutsuneakBete1Page]
})
export class MarijesiakHutsuneakBete1PageModule {}
