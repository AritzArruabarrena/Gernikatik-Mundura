import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarihitzegitenPage } from './marihitzegiten.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MarihitzegitenPage }]),
    MarihitzegitenPage 
  ]
})
export class MarihitzegitenModule { }
