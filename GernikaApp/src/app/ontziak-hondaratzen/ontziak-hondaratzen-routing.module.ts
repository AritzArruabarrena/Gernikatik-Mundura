import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OntziakHondaratzenPage } from './ontziak-hondaratzen.page';

const routes: Routes = [
  {
    path: '',
    component: OntziakHondaratzenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OntziakHondaratzenPageRoutingModule {}
