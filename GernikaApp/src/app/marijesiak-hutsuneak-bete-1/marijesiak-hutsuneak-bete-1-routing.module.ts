import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarijesiakHutsuneakBete1Page } from './marijesiak-hutsuneak-bete-1.page';

const routes: Routes = [
  {
    path: '',
    component: MarijesiakHutsuneakBete1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarijesiakHutsuneakBete1PageRoutingModule {}
