import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PertsonakPuzzlePage } from './pertsonak-puzzle.page';

const routes: Routes = [
  {
    path: '',
    component: PertsonakPuzzlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PertsonakPuzzlePageRoutingModule {}
