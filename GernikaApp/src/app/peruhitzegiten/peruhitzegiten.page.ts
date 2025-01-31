import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-peruhitzegiten',
  templateUrl: './peruhitzegiten.page.html',
  styleUrls: ['./peruhitzegiten.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] 
})
export class PeruhitzegitenPage {
  constructor(private router: Router, private location: Location) {}  // Combina los servicios en un único constructor

  // Método para navegar a la siguiente página
  goToNextPage() {
    this.router.navigateByUrl('/tabs/kartakaurkitu'); 
  }

  // Método para regresar a la página anterior
  goBack() {
    this.location.back(); // Regresa a la página anterior
  }
  goMap(){
    this.router.navigateByUrl('/tabs/mapa');
  }
}
