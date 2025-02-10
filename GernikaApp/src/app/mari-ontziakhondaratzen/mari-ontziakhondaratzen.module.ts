import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MariOntziakhondaratzenPageRoutingModule } from './mari-ontziakhondaratzen-routing.module';

import { MariOntziakhondaratzenPage } from './mari-ontziakhondaratzen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MariOntziakhondaratzenPageRoutingModule
  ],
  declarations: [MariOntziakhondaratzenPage]
})
export class MariOntziakhondaratzenPageModule {}
