import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-mari-marijesiak',
  templateUrl: './mari-marijesiak.page.html',
  styleUrls: ['./mari-marijesiak.page.scss'],
  standalone: false,
})
export class MariMarijesiakPage {
  constructor(private router: Router, private location: Location) {}

  goToNextPage() {
    this.router.navigateByUrl('/tabs/marijesiak-hutsuneak-bete');
  }

  goBack() {
    this.location.back();
  }

  goMap() {
    this.router.navigateByUrl('/tabs/mapa');
  }
}
