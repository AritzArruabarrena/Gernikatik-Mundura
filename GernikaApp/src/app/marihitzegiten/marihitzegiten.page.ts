import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-marihitzegiten',
  templateUrl: './marihitzegiten.page.html',
  styleUrls: ['./marihitzegiten.page.scss'],
  standalone: true, 
  imports: [CommonModule, IonicModule], 
})
export class MarihitzegitenPage {
  constructor(private router: Router, private location: Location) {}  

  goToNextPage() {
    this.router.navigateByUrl('/tabs/peruhitzegiten');
  }

  goBack() {
    this.location.back(); 
  }

  goMap(){
    this.router.navigateByUrl('/tabs/mapa');
  }
}
