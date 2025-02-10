import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-peru-kartak-letra-zopa',
  templateUrl: './peru-kartak-letra-zopa.page.html',
  styleUrls: ['./peru-kartak-letra-zopa.page.scss'],
  standalone: false,
})
export class PeruKartakLetraZopaPage {

  constructor(private router: Router, private location: Location) {}


  goToNextPage() {
    this.router.navigateByUrl('/tabs/kartakaurkitu'); 
  }

  goBack() {
    this.location.back(); 
  }

  goMap(){
    this.router.navigateByUrl('/tabs/mapa');
  }

}