import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-marijesiak-hutsuneak-bete-3',
  templateUrl: './marijesiak-hutsuneak-bete-3.page.html',
  styleUrls: ['./marijesiak-hutsuneak-bete-3.page.scss'],
  standalone: false,
})
export class MarijesiakHutsuneakBete3Page implements OnInit {
// Propiedades para almacenar las respuestas del usuario
respuesta1: string = '';
respuesta2: string = '';
respuesta3: string = '';
respuesta4: string = '';
respuesta5: string = '';

// Propiedades para marcar errores en los inputs
errorRespuesta1: boolean = false;
errorRespuesta2: boolean = false;
errorRespuesta3: boolean = false;
errorRespuesta4: boolean = false;
errorRespuesta5: boolean = false;


// Palabras correctas (en minúsculas para facilitar la comparación)
correctas = {
  respuesta1: 'mari montaña',
  respuesta2: 'zabal-zabal',
  respuesta3: 'ez',
  respuesta4: 'lau',
  respuesta5:'jotzen'
};

// Propiedades adicionales para la funcionalidad de la letra-grid y lista de palabras
wordsLeft: number = 3; // Valor de ejemplo, ajústalo según tu lógica
foundWords: Set<string> = new Set(); // Conjunto de palabras ya encontradas

// Propiedad para almacenar la instancia del audio
private audio: HTMLAudioElement | null = null;

constructor(private navCtrl: NavController, private location: Location) { }

ngOnInit() { }

/**
 * Verifica que las respuestas ingresadas sean correctas y marca en rojo las que sean erróneas.
 */
verificarRespuestas() {
  const r1 = this.respuesta1.trim().toLowerCase();
  const r2 = this.respuesta2.trim().toLowerCase();
  const r3 = this.respuesta3.trim().toLowerCase();
  const r4 = this.respuesta4.trim().toLowerCase();
  const r5 = this.respuesta5.trim().toLowerCase();



  // Actualiza las propiedades de error según corresponda
  this.errorRespuesta1 = (r1 !== this.correctas.respuesta1);
  this.errorRespuesta2 = (r2 !== this.correctas.respuesta2);
  this.errorRespuesta3 = (r3 !== this.correctas.respuesta3);
  this.errorRespuesta4 = (r4 !== this.correctas.respuesta4);
  this.errorRespuesta5 = (r5 !== this.correctas.respuesta5);

  if (!this.errorRespuesta1 && !this.errorRespuesta2 && !this.errorRespuesta3 && !this.errorRespuesta4 && !this.errorRespuesta5) {
    alert('¡Correcto!');
  } else {
    alert('Algunas respuestas son incorrectas. ¡Inténtalo de nuevo!');
  }
}

/**
 * Reproduce el audio correspondiente a la estrofa.
 * Cada vez que se presione el botón, si el audio ya está sonando se reiniciará.
 */
playAudio() {
  // Si ya existe una instancia de audio, se pausa y se reinicia
  if (this.audio) {
    this.audio.pause();
    this.audio.currentTime = 0;
  } else {
    // Si no existe, se crea la instancia
    this.audio = new Audio('../../assets/audio/musikalaugarrenzatia.mp3');
  }

  this.audio.play().catch(error => {
    console.error('Error al reproducir el audio:', error);
  });
}

/**
 * Navega a la página siguiente y detiene el audio si se está reproduciendo.
 */
goToNextPage() {
  if (this.audio) {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  this.navCtrl.navigateForward('/tabs/tab1');
}

/**
 * Vuelve a la página anterior.
 */
goBack() {
  this.location.back();
}
}