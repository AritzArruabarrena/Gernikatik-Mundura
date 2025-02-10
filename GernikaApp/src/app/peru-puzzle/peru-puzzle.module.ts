import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeruPuzzlePageRoutingModule } from './peru-puzzle-routing.module';

import { PeruPuzzlePage } from './peru-puzzle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeruPuzzlePageRoutingModule
  ],
  declarations: [PeruPuzzlePage]
})
export class PeruPuzzlePageModule {}
