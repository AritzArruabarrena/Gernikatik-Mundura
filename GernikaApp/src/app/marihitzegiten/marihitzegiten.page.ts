import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-marihitzegiten',
  templateUrl: './marihitzegiten.page.html',
  styleUrls: ['./marihitzegiten.page.scss'],
  standalone: true, // ✅ Componente standalone
  imports: [CommonModule, IonicModule], 
})
export class MarihitzegitenPage {
  constructor(private router: Router) {}
  goToNextPage() {
    this.router.navigateByUrl('/tabs/peruhitzegiten');
  }
  goBack() {
    this.router.navigateByUrl('/tabs/tab1');
  }
}