import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { GameService } from 'src/app/services/game.service'; 

@Component({
  selector: 'app-marijesiak-hutsuneak-bete-3',
  templateUrl: './marijesiak-hutsuneak-bete-3.page.html',
  styleUrls: ['./marijesiak-hutsuneak-bete-3.page.scss'],
  standalone: false,
})
export class MarijesiakHutsuneakBete3Page implements OnInit {
  respuesta1: string = '';
  respuesta2: string = '';
  respuesta3: string = '';
  respuesta4: string = '';
  respuesta5: string = '';

  errorRespuesta1: boolean = false;
  errorRespuesta2: boolean = false;
  errorRespuesta3: boolean = false;
  errorRespuesta4: boolean = false;
  errorRespuesta5: boolean = false;

  correctas = {
    respuesta1: 'mari montaña',
    respuesta2: 'zabal-zabal',
    respuesta3: 'ez',
    respuesta4: 'lau',
    respuesta5: 'jotzen',
  };

  wordsLeft: number = 3;
  foundWords: Set<string> = new Set(); 

  private audio: HTMLAudioElement | null = null;

  showWinImage: boolean = false;
  winImage: string = '';

  constructor(
    private navCtrl: NavController,
    private location: Location,
    private gameService: GameService 
  ) {}

  ngOnInit() {}

  verificarRespuestas() {
    const r1 = this.respuesta1.trim().toLowerCase();
    const r2 = this.respuesta2.trim().toLowerCase();
    const r3 = this.respuesta3.trim().toLowerCase();
    const r4 = this.respuesta4.trim().toLowerCase();
    const r5 = this.respuesta5.trim().toLowerCase();

    this.errorRespuesta1 = r1 !== this.correctas.respuesta1;
    this.errorRespuesta2 = r2 !== this.correctas.respuesta2;
    this.errorRespuesta3 = r3 !== this.correctas.respuesta3;
    this.errorRespuesta4 = r4 !== this.correctas.respuesta4;
    this.errorRespuesta5 = r5 !== this.correctas.respuesta5;

    if (
      !this.errorRespuesta1 &&
      !this.errorRespuesta2 &&
      !this.errorRespuesta3 &&
      !this.errorRespuesta4 &&
      !this.errorRespuesta5
    ) {
      this.gameService.winCounter += 1;
      this.winImage = `../../assets/images/caminito${this.gameService.winCounter}.png`;
      this.showWinImage = true;
      setTimeout(() => {
        this.showWinImage = false;
        this.goToNextPage();
      }, 4000);
    } else {
      alert('Algunas respuestas son incorrectas. ¡Inténtalo de nuevo!');
    }
  }

  playAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    } else {
      this.audio = new Audio('../../assets/audio/musikalaugarrenzatia.mp3');
    }

    this.audio.play().catch((error) => {
      console.error('Error al reproducir el audio:', error);
    });
  }

  goToNextPage() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.navCtrl.navigateForward('/tabs/tab1');
  }

  goBack() {
    this.location.back();
  }
}
