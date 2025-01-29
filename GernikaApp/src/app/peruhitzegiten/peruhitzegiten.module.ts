import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PeruhitzegitenPage } from './peruhitzegiten.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PeruhitzegitenPage }]),
    PeruhitzegitenPage // ✅ Import instead of declaring
  ]
})
export class PeruhitzegitenModule { }
