import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; // Importa Location

@Component({
  selector: 'app-marihitzegiten',
  templateUrl: './marihitzegiten.page.html',
  styleUrls: ['./marihitzegiten.page.scss'],
  standalone: true, // ✅ Componente standalone
  imports: [CommonModule, IonicModule], 
})
export class MarihitzegitenPage {
  constructor(private router: Router, private location: Location) {}  // Combina los servicios en un único constructor

  // Método para navegar a la siguiente página
  goToNextPage() {
    this.router.navigateByUrl('/tabs/peruhitzegiten');
  }

  // Método para regresar a la página anterior
  goBack() {
    this.location.back(); // Regresa a la página anterior
  }

  goMap(){
    this.router.navigateByUrl('/tabs/mapa');
  }
}
