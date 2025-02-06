import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarijesiakHutsuneakBetePageRoutingModule } from './marijesiak-hutsuneak-bete-routing.module';

import { MarijesiakHutsuneakBetePage } from './marijesiak-hutsuneak-bete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarijesiakHutsuneakBetePageRoutingModule
  ],
  declarations: [MarijesiakHutsuneakBetePage]
})
export class MarijesiakHutsuneakBetePageModule {}
