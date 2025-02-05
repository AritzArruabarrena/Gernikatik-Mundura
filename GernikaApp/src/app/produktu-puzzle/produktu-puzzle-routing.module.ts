import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduktuPuzzlePage } from './produktu-puzzle.page';

const routes: Routes = [
  {
    path: '',
    component: ProduktuPuzzlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduktuPuzzlePageRoutingModule {}
