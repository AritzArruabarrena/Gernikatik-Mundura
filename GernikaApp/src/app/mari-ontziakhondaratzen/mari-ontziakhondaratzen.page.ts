import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-mari-ontziakhondaratzen',
  templateUrl: './mari-ontziakhondaratzen.page.html',
  styleUrls: ['./mari-ontziakhondaratzen.page.scss'],
  standalone: false
})
export class MariOntziakhondaratzenPage {

  constructor(private router: Router, private location: Location) {}

  goToNextPage() {
    this.router.navigateByUrl('/tabs/ontziak-hondaratzen');
  }

  goBack() {
    this.location.back();
  }

  goMap() {
    this.router.navigateByUrl('/tabs/mapa');
  }
}