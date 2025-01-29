import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // ✅ Importar módulos de Ionic

@Component({
  selector: 'app-marihitzegiten',
  templateUrl: './marihitzegiten.page.html',
  styleUrls: ['./marihitzegiten.page.scss'],
  standalone: true, // ✅ Componente standalone
  imports: [CommonModule, IonicModule], // ✅ Agregar IonicModule
})
export class MarihitzegitenPage {}