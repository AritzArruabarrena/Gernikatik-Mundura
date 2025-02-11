import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PertsonakPuzzlePageRoutingModule } from './pertsonak-puzzle-routing.module';

import { PertsonakPuzzlePage } from './pertsonak-puzzle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PertsonakPuzzlePageRoutingModule
  ],
  declarations: [PertsonakPuzzlePage]
})
export class PertsonakPuzzlePageModule {}
