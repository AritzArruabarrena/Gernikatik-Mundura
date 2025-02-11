import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MariMarijesiakPage } from './mari-marijesiak.page';

const routes: Routes = [
  {
    path: '',
    component: MariMarijesiakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MariMarijesiakPageRoutingModule {}
