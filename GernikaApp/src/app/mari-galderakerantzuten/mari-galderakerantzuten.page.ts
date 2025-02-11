import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-mari-galderakerantzuten',
  templateUrl: './mari-galderakerantzuten.page.html',
  styleUrls: ['./mari-galderakerantzuten.page.scss'],
  standalone: false,
})
export class MariGalderakerantzutenPage {
  constructor(private router: Router, private location: Location) {}

  goToNextPage() {
    this.router.navigateByUrl('/tabs/galderak-erantzuten');
  }

  goBack() {
    this.location.back();
  }

  goMap() {
    this.router.navigateByUrl('/tabs/mapa');
  }
}
