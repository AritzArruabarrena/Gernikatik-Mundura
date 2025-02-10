import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MariGalderakerantzutenPage } from './mari-galderakerantzuten.page';

const routes: Routes = [
  {
    path: '',
    component: MariGalderakerantzutenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MariGalderakerantzutenPageRoutingModule {}
