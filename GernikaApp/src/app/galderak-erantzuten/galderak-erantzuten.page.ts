import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-galderak-erantzuten',
  templateUrl: './galderak-erantzuten.page.html',
  styleUrls: ['./galderak-erantzuten.page.scss'],
  standalone: false
})
export class GalderakErantzutenPage implements OnInit {
  preguntas = [
    {
      pregunta: 'Zein da Gernikako Arbolaren esanahia?',
      opciones: [
        { texto: 'Errege bat izendatzeko lekua', correcta: false },
        { texto: 'Euskal Herriaren askatasunaren sinboloa', correcta: true },
        { texto: 'Gernikako futbol taldearen izena', correcta: false },
        { texto: 'Landare mota bat', correcta: false }
      ]
    },
    {
      pregunta: 'Zer egiten zen Gernikako Arbolaren azpian?',
      opciones: [
        { texto: 'Jaialdiak ospatzen ziren', correcta: false },
        { texto: 'Euskal Herriko legeak eztabaidatu eta erabakitzen ziren', correcta: true },
        { texto: 'Animalien feriak egiten ziren', correcta: false },
        { texto: 'Futbol partidak jokatzen ziren', correcta: false }
      ]
    },
    {
      pregunta: 'Zein da Gernikako Batzar Etxearen helburu nagusia?',
      opciones: [
        { texto: 'Euskara ikasteko eskola bat izatea', correcta: false },
        { texto: 'Euskal Herriko lurraldeen arteko bilerak egitea', correcta: true },
        { texto: 'Euskal abestiak entzuteko gunea izatea', correcta: false },
        { texto: 'Gernikako museo bat izatea', correcta: false }
      ]
    },
    {
      pregunta: 'Zein urtetan eraiki zen Gernikako Batzar Etxea?',
      opciones: [
        { texto: '1700ean', correcta: false },
        { texto: '1833an', correcta: true },
        { texto: '1920an', correcta: false },
        { texto: '1600ean', correcta: false }
      ]
    },
    {
      pregunta: 'Zein zuhaitz motakoa da Gernikako Arbola?',
      opciones: [
        { texto: 'Haritza', correcta: true },
        { texto: 'Pinua', correcta: false },
        { texto: 'Pagoa', correcta: false },
        { texto: 'Lizarra', correcta: false }
      ]
    }
  ];

  preguntaActual = 0;
  respuestaSeleccionada: boolean | null = null;
  letras = ['A', 'B', 'C', 'D']; // Mantiene las letras en orden
  hurrengoa = false; // Controla si el juego ha finalizado

  constructor(private location: Location) {}

  ngOnInit() {
    this.mezclarOpciones();
  }

  seleccionarRespuesta(opcion: any) {
    this.respuestaSeleccionada = opcion.correcta;
    setTimeout(() => {
      this.siguientePregunta();
    }, 1000);
  }

  siguientePregunta() {
    if (this.preguntaActual < this.preguntas.length - 1) {
      this.preguntaActual++;
      this.respuestaSeleccionada = null;
    } else {
      this.hurrengoa = true; // Muestra el botón de finalizar
    }
  }

  Hurrengoa() {
    alert('Zorionak! Jokua bukatu da!');
    this.location.back(); // Regresa a la pantalla anterior
  }

  goBack() {
    this.location.back();
  }

  // Función para mezclar aleatoriamente las opciones
  mezclarOpciones() {
    this.preguntas.forEach(pregunta => {
      pregunta.opciones = this.shuffleArray(pregunta.opciones);
    });
  }

  // Algoritmo de Fisher-Yates para mezclar un array
  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
