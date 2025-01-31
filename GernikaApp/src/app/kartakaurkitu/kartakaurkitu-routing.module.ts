import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KartakaurkituPage } from './kartakaurkitu.page';

const routes: Routes = [
  {
    path: '',
    component: KartakaurkituPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KartakaurkituPageRoutingModule {}
