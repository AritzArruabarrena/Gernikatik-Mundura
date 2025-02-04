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
  audioLoaded = false; // Flag para saber si el audio está cargado

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
    this.audio = new Audio();
  }

  ngOnInit() {}

  goBack() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
    this.location.back();
  }

  async playAudio() {
    if (!this.audioLoaded) {
      console.log("Cargando audio en memoria...");
      await this.loadAudio(); // Precarga antes de reproducir
    }

    if (this.audio.paused) {
      this.audio.play().catch(error => console.log("Error reproduciendo audio:", error));
      this.isPlaying = true;
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlaying = false;
    }
  }

  async loadAudio() {
    try {
      const response = await fetch('../../assets/audio/UrteBarriBarri.mp3');
      const blob = await response.blob();
      this.audio.src = URL.createObjectURL(blob);
      this.audio.load();
      this.audioLoaded = true;
      console.log("Audio precargado correctamente.");
    } catch (error) {
      console.error("Error precargando el audio:", error);
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
