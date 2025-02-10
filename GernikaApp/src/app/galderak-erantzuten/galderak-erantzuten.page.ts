import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-galderak-erantzuten',
  templateUrl: './galderak-erantzuten.page.html',
  styleUrls: ['./galderak-erantzuten.page.scss'],
  standalone: false,
})
export class GalderakErantzutenPage implements OnInit {
  showWinImage: boolean = false;
  winImage: string = '';
  preguntas = [
    {
      pregunta: 'Zein da Gernikako Arbolaren esanahia?',
      opciones: [
        { texto: 'Errege bat izendatzeko lekua', correcta: false },
        { texto: 'Euskal Herriaren askatasunaren sinboloa', correcta: true },
        { texto: 'Gernikako futbol taldearen izena', correcta: false },
        { texto: 'Landare mota bat', correcta: false },
      ],
      imagen: '../../assets/images/galderak-1.png',
    },
    {
      pregunta: 'Zer egiten zen Gernikako Arbolaren azpian?',
      opciones: [
        { texto: 'Jaialdiak ospatzen ziren', correcta: false },
        {
          texto: 'Euskal Herriko legeak eztabaidatu eta erabakitzen ziren',
          correcta: true,
        },
        { texto: 'Animalien feriak egiten ziren', correcta: false },
        { texto: 'Futbol partidak jokatzen ziren', correcta: false },
      ],
      imagen: '../../assets/images/galderak-2.png',
    },
    {
      pregunta: 'Zein da Gernikako Batzar Etxearen helburu nagusia?',
      opciones: [
        { texto: 'Euskara ikasteko eskola bat izatea', correcta: false },
        {
          texto: 'Euskal Herriko lurraldeen arteko bilerak egitea',
          correcta: true,
        },
        { texto: 'Euskal abestiak entzuteko gunea izatea', correcta: false },
        { texto: 'Gernikako museo bat izatea', correcta: false },
      ],
      imagen: '../../assets/images/galderak-3.png',
    },
    {
      pregunta: 'Zein urtetan eraiki zen Gernikako Batzar Etxea?',
      opciones: [
        { texto: '1700ean', correcta: false },
        { texto: '1833an', correcta: true },
        { texto: '1920an', correcta: false },
        { texto: '1600ean', correcta: false },
      ],
      imagen: '../../assets/images/galderak-5.png',
    },
    {
      pregunta: 'Zein zuhaitz motakoa da Gernikako Arbola?',
      opciones: [
        { texto: 'Haritza', correcta: true },
        { texto: 'Pinua', correcta: false },
        { texto: 'Pagoa', correcta: false },
        { texto: 'Lizarra', correcta: false },
      ],
      imagen: '../../assets/images/galderak-6.png',
    },
  ];

  preguntaActual = 0;
  respuestaSeleccionada: boolean | null = null;
  letras = ['A', 'B', 'C', 'D']; // Mantiene las letras en orden
  hurrengoa = false; // Controla si el juego ha finalizado
  constructor(
    private location: Location,
    private navCtrl: NavController,
    private gameService: GameService
  ) {}

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
      this.hurrengoa = true;
    }
  }

  Hurrengoa() {
    alert('Zorionak! Jokua bukatu da!');
    this.gameService.winCounter += 1;
    this.winImage = `../../assets/images/caminito${this.gameService.winCounter}.png`;
    this.showWinImage = true;
    setTimeout(() => {
      this.showWinImage = false;
      this.navCtrl.navigateForward('/tabs/tab1');
    }, 4000);
  }

  goBack() {
    this.location.back();
  }

  mezclarOpciones() {
    this.preguntas.forEach((pregunta) => {
      pregunta.opciones = this.shuffleArray(pregunta.opciones);
    });
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
