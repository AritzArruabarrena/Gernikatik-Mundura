import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marijesiak-hutsuneak-bete',
  templateUrl: './marijesiak-hutsuneak-bete.page.html',
  styleUrls: ['./marijesiak-hutsuneak-bete.page.scss'],
  standalone: false,
})
export class MarijesiakHutsuneakBetePage implements OnInit {
  // Propiedades para almacenar las respuestas del usuario
  respuesta1: string = '';
  respuesta2: string = '';
  respuesta3: string = '';

  // Palabras correctas (en minúsculas para facilitar la comparación)
  correctas = {
    respuesta1: 'erregeak',
    respuesta2: 'eguna',
    respuesta3: 'jan'
  };

  constructor() { }

  ngOnInit() { }

  /**
   * Verifica que las respuestas ingresadas sean correctas.
   */
  verificarRespuestas() {
    const r1 = this.respuesta1.trim().toLowerCase();
    const r2 = this.respuesta2.trim().toLowerCase();
    const r3 = this.respuesta3.trim().toLowerCase();

    if (r1 === this.correctas.respuesta1 && r2 === this.correctas.respuesta2 && r3 === this.correctas.respuesta3) {
      alert('¡Correcto!');
    } else {
      alert('Algunas respuestas son incorrectas. ¡Inténtalo de nuevo!');
    }
  }

  /**
   * Reproduce el audio correspondiente a la estrofa.
   */
  playAudio() {
    const audio = new Audio('assets/audio/estrofa1.mp3');
    audio.play().catch(error => {
      console.error('Error al reproducir el audio:', error);
    });
  }
}
