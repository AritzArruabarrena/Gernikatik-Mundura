import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeruPuzzlePage } from './peru-puzzle.page';

const routes: Routes = [
  {
    path: '',
    component: PeruPuzzlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeruPuzzlePageRoutingModule {}
