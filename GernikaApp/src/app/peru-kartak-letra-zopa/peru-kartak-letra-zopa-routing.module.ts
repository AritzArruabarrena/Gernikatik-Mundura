import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeruKartakLetraZopaPage } from './peru-kartak-letra-zopa.page';

const routes: Routes = [
  {
    path: '',
    component: PeruKartakLetraZopaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeruKartakLetraZopaPageRoutingModule {}
