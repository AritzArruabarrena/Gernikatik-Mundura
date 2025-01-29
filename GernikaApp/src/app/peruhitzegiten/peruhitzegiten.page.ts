import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // ✅ Importar módulos de Ionic

@Component({
  selector: 'app-peruhitzegiten',
  templateUrl: './peruhitzegiten.page.html',
  styleUrls: ['./peruhitzegiten.page.scss'],
  standalone: true, // ✅ Componente standalone
  imports: [CommonModule, IonicModule] // ✅ Agregar IonicModule
})
export class PeruhitzegitenPage {}
