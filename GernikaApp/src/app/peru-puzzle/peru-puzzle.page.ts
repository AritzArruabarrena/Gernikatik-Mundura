import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-peru-puzzle',
  templateUrl: './peru-puzzle.page.html',
  styleUrls: ['./peru-puzzle.page.scss'],
  standalone: false,
})
export class PeruPuzzlePage{

  constructor(private router: Router, private location: Location) {}

  goToNextPage() {
    this.router.navigateByUrl('/tabs/produktu-puzzle'); 
  }

  goBack() {
    this.location.back(); 
  }

  goMap(){
    this.router.navigateByUrl('/tabs/mapa');
  }
}
