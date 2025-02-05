import { Component } from '@angular/core';
import { ScreenOrientation, OrientationType } from '@capawesome/capacitor-screen-orientation';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {
    this.lockScreenOrientation();
  }

  async lockScreenOrientation() {
    try {
      await ScreenOrientation.lock({ type: OrientationType.PORTRAIT });
      console.log('Pantalla bloqueada en modo retrato');
    } catch (error) {
      console.error('Error al bloquear la orientación:', error);
    }
  }
}
