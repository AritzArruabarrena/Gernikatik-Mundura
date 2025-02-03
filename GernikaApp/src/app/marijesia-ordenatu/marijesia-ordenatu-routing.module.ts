import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarijesiaOrdenatuPage } from './marijesia-ordenatu.page';

const routes: Routes = [
  {
    path: '',
    component: MarijesiaOrdenatuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarijesiaOrdenatuPageRoutingModule {}
