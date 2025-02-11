import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduktuPuzzlePageRoutingModule } from './produktu-puzzle-routing.module';

import { ProduktuPuzzlePage } from './produktu-puzzle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduktuPuzzlePageRoutingModule
  ],
  declarations: [ProduktuPuzzlePage]
})
export class ProduktuPuzzlePageModule {}
