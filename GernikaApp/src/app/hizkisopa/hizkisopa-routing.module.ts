import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HizkisopaPage } from './hizkisopa.page';

const routes: Routes = [
  {
    path: '',
    component: HizkisopaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HizkisopaPageRoutingModule {}
