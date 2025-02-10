import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MariMarijesiakPageRoutingModule } from './mari-marijesiak-routing.module';

import { MariMarijesiakPage } from './mari-marijesiak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MariMarijesiakPageRoutingModule
  ],
  declarations: [MariMarijesiakPage]
})
export class MariMarijesiakPageModule {}
