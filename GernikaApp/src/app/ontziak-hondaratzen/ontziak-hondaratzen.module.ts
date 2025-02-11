import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OntziakHondaratzenPageRoutingModule } from './ontziak-hondaratzen-routing.module';

import { OntziakHondaratzenPage } from './ontziak-hondaratzen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OntziakHondaratzenPageRoutingModule
  ],
  declarations: [OntziakHondaratzenPage]
})
export class OntziakHondaratzenPageModule {}
