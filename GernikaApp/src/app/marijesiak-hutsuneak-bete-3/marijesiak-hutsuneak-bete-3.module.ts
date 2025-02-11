import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarijesiakHutsuneakBete3PageRoutingModule } from './marijesiak-hutsuneak-bete-3-routing.module';

import { MarijesiakHutsuneakBete3Page } from './marijesiak-hutsuneak-bete-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarijesiakHutsuneakBete3PageRoutingModule
  ],
  declarations: [MarijesiakHutsuneakBete3Page]
})
export class MarijesiakHutsuneakBete3PageModule {}
