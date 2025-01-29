import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarihitzegitenPage } from './marihitzegiten.page';

const routes: Routes = [
  {
    path: '',
    component: MarihitzegitenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarihitzegitenPageRoutingModule {}
