import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-marijesia-ordenatu',
  templateUrl: './marijesia-ordenatu.page.html',
  styleUrls: ['./marijesia-ordenatu.page.scss'],
  standalone: false
})
export class MarijesiaOrdenatuPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
