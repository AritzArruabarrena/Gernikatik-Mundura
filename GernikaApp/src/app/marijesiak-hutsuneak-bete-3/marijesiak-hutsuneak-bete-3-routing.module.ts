import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarijesiakHutsuneakBete3Page } from './marijesiak-hutsuneak-bete-3.page';

const routes: Routes = [
  {
    path: '',
    component: MarijesiakHutsuneakBete3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarijesiakHutsuneakBete3PageRoutingModule {}
