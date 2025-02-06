import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarijesiakHutsuneakBetePage } from './marijesiak-hutsuneak-bete.page';

const routes: Routes = [
  {
    path: '',
    component: MarijesiakHutsuneakBetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarijesiakHutsuneakBetePageRoutingModule {}
