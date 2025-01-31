import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hizkisopa',
  templateUrl: './hizkisopa.page.html',
  styleUrls: ['./hizkisopa.page.scss'],
  standalone: false
})
export class HizkisopaPage implements OnInit {
  words = [
    'PILOTA', 'TXAPELA', 'ZESTA-PUNTA', 'PILOTALEKUA',
    'JAI-ALAI', 'TXAPELKETA', 'ESKUPILOTA', 'PARTIDAK',
    'ESKUZESKUKOA', 'PILOTARIA'
  ];

  grid: string[] = [];
  gridSize = 12;
  selectedLetters: number[] = [];
  foundWords: Set<string> = new Set();
  timer: number = 500;
  wordsLeft: number = this.words.length;
  interval: any;
  isMouseDown: boolean = false;
  confirmedLetters: Set<number> = new Set();

  constructor(private navCtrl: NavController, private location: Location) {}

  ngOnInit() {
    this.generateGrid();
    this.startTimer();
  }

  generateGrid() {
    let gridArray = new Array(this.gridSize * this.gridSize).fill(null);
    const directions = [
      { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: -1, y: 1 },
      { x: -1, y: 0 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: 1, y: -1 }
    ];
    
    this.words.forEach((word) => {
      let placed = false;
      let attempts = 0;
      while (!placed && attempts < 200) { // Aumentamos intentos para mayor éxito
        let direction = directions[Math.floor(Math.random() * directions.length)];
        let startX = Math.floor(Math.random() * this.gridSize);
        let startY = Math.floor(Math.random() * this.gridSize);

        if (this.canPlaceWord(gridArray, word, startX, startY, direction)) {
          word.split('').forEach((char, i) => {
            gridArray[(startY + i * direction.y) * this.gridSize + (startX + i * direction.x)] = char;
          });
          placed = true;
        }
        attempts++;
      }
    });
    
    this.grid = gridArray.map((char) => char || String.fromCharCode(65 + Math.floor(Math.random() * 26)));
  }

  canPlaceWord(gridArray: string[], word: string, startX: number, startY: number, direction: {x: number, y: number}): boolean {
    for (let i = 0; i < word.length; i++) {
      let x = startX + i * direction.x;
      let y = startY + i * direction.y;
      if (x < 0 || x >= this.gridSize || y < 0 || y >= this.gridSize || gridArray[y * this.gridSize + x]) {
        return false;
      }
    }
    return true;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  startSelection(index: number, event: MouseEvent | TouchEvent) {
    if (event instanceof TouchEvent) {
      event.preventDefault(); // Prevenir el scroll en dispositivos móviles
    }
    this.isMouseDown = true;
    this.selectedLetters = [index];
  }

  continueSelection(index: number, event: MouseEvent | TouchEvent) {
    if (!this.isMouseDown) return;

    if (event instanceof TouchEvent) {
      event.preventDefault(); // Prevenir el scroll en dispositivos móviles
    }

    if (!this.selectedLetters.includes(index)) {
      this.selectedLetters.push(index);
    }
  }

  endSelection() {
    this.isMouseDown = false;
    const selectedWord = this.selectedLetters.map((index) => this.grid[index]).join('');
    if (this.words.includes(selectedWord) && !this.foundWords.has(selectedWord)) {
      this.foundWords.add(selectedWord);
      this.wordsLeft = this.words.length - this.foundWords.size;
      this.selectedLetters.forEach((index) => this.confirmedLetters.add(index));
    } else {
      this.selectedLetters = [];
    }
  }
  

  goToNextPage() {
    this.navCtrl.navigateForward('/tabs/next-level');
  }

  goBack() {
    this.location.back();
  }
}