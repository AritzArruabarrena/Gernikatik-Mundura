import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarijesiakHutsuneakBete2Page } from './marijesiak-hutsuneak-bete-2.page';

const routes: Routes = [
  {
    path: '',
    component: MarijesiakHutsuneakBete2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarijesiakHutsuneakBete2PageRoutingModule {}
