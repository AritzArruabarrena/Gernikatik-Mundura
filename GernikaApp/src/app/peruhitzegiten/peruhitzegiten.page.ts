import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-peruhitzegiten',
  templateUrl: './peruhitzegiten.page.html',
  styleUrls: ['./peruhitzegiten.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] 
})
export class PeruhitzegitenPage {
  constructor(private router: Router) {}
  goBack() {
    this.router.navigateByUrl('/tabs/marihitzegiten');
  }
}
