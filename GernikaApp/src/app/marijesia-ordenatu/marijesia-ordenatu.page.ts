import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-marijesia-ordenatu',
  templateUrl: './marijesia-ordenatu.page.html',
  styleUrls: ['./marijesia-ordenatu.page.scss'],
  standalone: false
})
export class MarijesiaOrdenatuPage implements OnInit {
  private audio: HTMLAudioElement;
  isPlaying = false;
  audioLoaded = false; 

  sentences = [
    "3. Pobrea eta apala dana inoiz ez dagigun saldu, elizan eta gero etxean fededun legez azaldu, esperantza ta maitetasuna indartu eta ez galdu: Jesus laguna ta barri ona sakondu eta zabaldu.",
    "1. Agur urte bat, barria dator kanta “urte barri barri”, joan jakuna gogoz eskertu ondo_etorri barriari; bake bidean emon pausua, Barri Ona iragarri, gure ustea ta konfiantza Jaunagan bakarrik jarri.",
    "2. Barri Onaren irakurketan bost minutu egunero, alkarteagaz meza ospatzen joateko pozik gero. Uda sasoian umorez bete trikia eta pandero ermita eta santu guztiei errezatuz bero bero."
  ];

  correctOrder = [
    "1. Agur urte bat, barria dator kanta “urte barri barri”, joan jakuna gogoz eskertu ondo_etorri barriari; bake bidean emon pausua, Barri Ona iragarri, gure ustea ta konfiantza Jaunagan bakarrik jarri.",
    "2. Barri Onaren irakurketan bost minutu egunero, alkarteagaz meza ospatzen joateko pozik gero. Uda sasoian umorez bete trikia eta pandero ermita eta santu guztiei errezatuz bero bero.",
    "3. Pobrea eta apala dana inoiz ez dagigun saldu, elizan eta gero etxean fededun legez azaldu, esperantza ta maitetasuna indartu eta ez galdu: Jesus laguna ta barri ona sakondu eta zabaldu."
  ];

  constructor(private location: Location) {
    this.audio = new Audio('../../assets/audio/UrteBarriBarri.mp3');
    this.audio.preload = 'auto';

    this.audio.addEventListener('canplaythrough', () => {
      this.audioLoaded = true;
      console.log("Audio listo para reproducirse");
    });
  }

  ngOnInit() {}

  goBack() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
    this.location.back();
  }

  playAudio() {
    if (!this.audioLoaded) {
      console.log("Esperando a que el audio se cargue...");
      return;
    }

    if (this.audio.paused) {
      this.audio.play();
      this.isPlaying = true;
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlaying = false;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sentences, event.previousIndex, event.currentIndex);
  }

  checkOrder() {
    if (JSON.stringify(this.sentences) === JSON.stringify(this.correctOrder)) {
      alert("Correcto. Ordenaste bien las frases.");
    } else {
      alert("Inténtalo de nuevo.");
    }
  }
}
