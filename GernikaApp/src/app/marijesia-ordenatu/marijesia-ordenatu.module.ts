import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarijesiaOrdenatuPageRoutingModule } from './marijesia-ordenatu-routing.module';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MarijesiaOrdenatuPage } from './marijesia-ordenatu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragDropModule,
    MarijesiaOrdenatuPageRoutingModule
  ],
  declarations: [MarijesiaOrdenatuPage]
})
export class MarijesiaOrdenatuPageModule {}
