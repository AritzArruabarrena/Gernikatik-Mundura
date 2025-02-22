import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, GestureController, Gesture } from '@ionic/angular';
import { Location } from '@angular/common';
import { GameService } from 'src/app/services/game.service'; // Ajusta la ruta según tu proyecto

@Component({
  selector: 'app-hizkisopa',
  templateUrl: './hizkisopa.page.html',
  styleUrls: ['./hizkisopa.page.scss'],
  standalone: false
})
export class HizkisopaPage implements OnInit, OnDestroy {
  words = [
    'PILOTA', 'TXAPELA', 'ZESTA-PUNTA', 'PILOTALEKUA',
    'JAI-ALAI', 'TXAPELKETA', 'ESKUPILOTA', 'PARTIDAK',
    'ESKUZESKUKOA', 'PILOTARIA'
  ];

  grid: string[] = [];
  gridSize = 14;
  selectedLetters: number[] = [];
  confirmedLetters: Set<number> = new Set();
  foundWords: Set<string> = new Set();
  timer: number = 300;
  wordsLeft: number = this.words.length;
  interval: any;
  isMouseDown: boolean = false;
  startIndex: number = -1;
  gesture!: Gesture;

  // Variables para la imagen ganadora
  showWinImage: boolean = false;
  winImage: string = '';

  constructor(
    private navCtrl: NavController,
    private location: Location,
    private gestureCtrl: GestureController,
    private gameService: GameService  // Inyección del servicio
  ) {}

  ngOnInit() {
    this.generateGrid();
    this.startTimer();
    this.initializeGesture();
  }

  ngOnDestroy() {
    if (this.gesture) {
      this.gesture.destroy();
    }
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  generateGrid() {
    let gridArray = new Array(this.gridSize * this.gridSize).fill(null); 
    const directions = [
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: -1, y: 1 },
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 }
    ];
    
    const sortedWords = [...this.words].sort((a, b) => b.length - a.length);
    
    sortedWords.forEach((word) => {
      let placed = false;
      let attempts = 0;
      const maxAttempts = 500; 
      
      while (!placed && attempts < maxAttempts) {
        const direction = directions[Math.floor(Math.random() * directions.length)];
        const startX = Math.floor(Math.random() * this.gridSize);
        const startY = Math.floor(Math.random() * this.gridSize);
        
        if (this.canPlaceWord(gridArray, word, startX, startY, direction)) {
          for (let i = 0; i < word.length; i++) {
            const x = startX + i * direction.x;
            const y = startY + i * direction.y;
            gridArray[y * this.gridSize + x] = word[i];
          }
          placed = true;
        }
        attempts++;
      }
      
      if (!placed) {
        console.warn(`No se pudo colocar la palabra: ${word}`);
      }
    });
    
    this.grid = gridArray.map((char) =>
      char || String.fromCharCode(65 + Math.floor(Math.random() * 26))
    );
  }

  canPlaceWord(gridArray: string[], word: string, startX: number, startY: number, direction: { x: number, y: number }): boolean {
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

  initializeGesture() {
    const gridElement = document.querySelector('.letter-grid');
    if (gridElement) {
      this.gesture = this.gestureCtrl.create({
        el: gridElement,
        gestureName: 'sopa-letras',
        threshold: 0,
        onStart: (ev) => this.handleGestureStart(ev),
        onMove: (ev) => this.handleGestureMove(ev),
        onEnd: (ev) => this.handleGestureEnd(ev)
      });
      this.gesture.enable();
    }
  }

  private getLetterIndexFromPoint(x: number, y: number): number | null {
    const element = document.elementFromPoint(x, y) as HTMLElement;
    if (element && element.classList.contains('letter')) {
      const indexString = element.getAttribute('data-index');
      return indexString !== null ? parseInt(indexString, 10) : null;
    }
    return null;
  }

  handleGestureStart(ev: any) {
    ev.event.preventDefault();
    const index = this.getLetterIndexFromPoint(ev.currentX, ev.currentY);
    if (index !== null) {
      this.isMouseDown = true;
      this.startIndex = index;
      this.selectedLetters = [index];
    }
  }

  handleGestureMove(ev: any) {
    if (!this.isMouseDown) return;
    ev.event.preventDefault();
    const index = this.getLetterIndexFromPoint(ev.currentX, ev.currentY);
    if (index !== null) {
      this.continueSelection(index);
    }
  }

  handleGestureEnd(ev: any) {
    this.endSelection();
  }

  continueSelection(index: number) {
    const startCoord = this.getCoordinates(this.startIndex);
    const currentCoord = this.getCoordinates(index);
    const dx = currentCoord.col - startCoord.col;
    const dy = currentCoord.row - startCoord.row;

    let stepX = 0;
    let stepY = 0;

    if (dx === 0 && dy !== 0) {
      stepY = dy > 0 ? 1 : -1;
    } else if (dy === 0 && dx !== 0) {
      stepX = dx > 0 ? 1 : -1;
    } else if (Math.abs(dx) === Math.abs(dy)) {
      stepX = dx > 0 ? 1 : -1;
      stepY = dy > 0 ? 1 : -1;
    } else {
      return;
    }

    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    const newSelection: number[] = [];
    for (let i = 0; i <= steps; i++) {
      const row = startCoord.row + i * stepY;
      const col = startCoord.col + i * stepX;
      if (row < 0 || row >= this.gridSize || col < 0 || col >= this.gridSize) break;
      newSelection.push(row * this.gridSize + col);
    }
    this.selectedLetters = newSelection;
  }

  endSelection() {
    this.isMouseDown = false;
    const selectedWord = this.selectedLetters.map(index => this.grid[index]).join('');
    if (this.words.includes(selectedWord) && !this.foundWords.has(selectedWord)) {
      this.foundWords.add(selectedWord);
      this.wordsLeft = this.words.length - this.foundWords.size;
      this.selectedLetters.forEach(index => this.confirmedLetters.add(index));
    }
    this.selectedLetters = [];
    this.startIndex = -1;
  }

  getCoordinates(index: number): { row: number, col: number } {
    return {
      row: Math.floor(index / this.gridSize),
      col: index % this.gridSize
    };
  }

  // Función para pasar al siguiente nivel. Solo se avanza si se han encontrado todas las palabras.
  goToNextPage() {
    if (this.wordsLeft === 0) {
      // Incrementa el contador del servicio
      this.gameService.winCounter += 1;
      this.winImage = `../../assets/images/caminito${this.gameService.winCounter}.png`;
      this.showWinImage = true;
      setTimeout(() => {
        this.showWinImage = false;
        // Navega a la siguiente pantalla (por ejemplo, a Marijesia Ordenatu)
        this.navCtrl.navigateForward('/tabs/tab1');
      }, 4000);
    } else {
      alert('Ez duzu jokoa bukatu!');
    }
  }

  goBack() {
    this.location.back();
  }

  toggleWord(word: string) {
    if (this.foundWords.has(word)) {
      this.foundWords.delete(word);
    } else {
      this.foundWords.add(word);
    }
    this.wordsLeft = this.words.length - this.foundWords.size;
  }
}
