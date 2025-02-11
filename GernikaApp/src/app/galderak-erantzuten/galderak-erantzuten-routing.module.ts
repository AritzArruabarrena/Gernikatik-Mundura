import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalderakErantzutenPage } from './galderak-erantzuten.page';

const routes: Routes = [
  {
    path: '',
    component: GalderakErantzutenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalderakErantzutenPageRoutingModule {}
