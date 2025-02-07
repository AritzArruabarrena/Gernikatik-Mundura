import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

export interface Cell {
  row: number;
  col: number;
  ship?: Ship;
  hit: boolean;
}

export interface Ship {
  name: string;
  size: number;
  image: string;
  coordinates: { row: number, col: number }[];
}

@Component({
  selector: 'app-ontziak-hondaratzen',
  templateUrl: './ontziak-hondaratzen.page.html',
  styleUrls: ['./ontziak-hondaratzen.page.scss'],
  standalone: false
})
export class OntziakHondaratzenPage implements OnInit {

  playerGrid: Cell[][] = [];
  machineGrid: Cell[][] = [];

  shipsConfig: Ship[] = [
    { name: 'Astra 400 pistola', size: 2, image: 'assets/images/astra400.png', coordinates: [] },
    { name: 'Astra Cadix revolver', size: 3, image: 'assets/images/astracadix.png', coordinates: [] },
    { name: 'Ametralladora arina', size: 4, image: 'assets/images/ametralladoraarina.png', coordinates: [] },
    { name: 'Rifle semiautomatikoa', size: 5, image: 'assets/images/riflesemiautomatikoa.png', coordinates: [] }
  ];

  playerShips: Ship[] = [];
  machineShips: Ship[] = [];

  currentTurn: 'player' | 'machine' = 'player';

  constructor(private navCtrl: NavController, private location: Location) { }

  ngOnInit() {
    this.initializeGrids();
    this.placePlayerShips();
    this.placeMachineShips();
  }

  initializeGrids() {
    for (let i = 0; i < 10; i++) {
      const playerRow: Cell[] = [];
      const machineRow: Cell[] = [];
      for (let j = 0; j < 10; j++) {
        playerRow.push({ row: i, col: j, hit: false });
        machineRow.push({ row: i, col: j, hit: false });
      }
      this.playerGrid.push(playerRow);
      this.machineGrid.push(machineRow);
    }
  }

  placePlayerShips() {
    this.playerShips = [];
    for (let shipConfig of this.shipsConfig) {
      const shipClone: Ship = { ...shipConfig, coordinates: [] };
      const placedShip = this.placeShipRandomly(shipClone, this.playerGrid);
      if (placedShip) {
        this.playerShips.push(placedShip);
      }
    }
  }

  placeMachineShips() {
    this.machineShips = [];
    for (let shipConfig of this.shipsConfig) {
      const shipClone: Ship = { ...shipConfig, coordinates: [] };
      const placedShip = this.placeShipRandomly(shipClone, this.machineGrid);
      if (placedShip) {
        this.machineShips.push(placedShip);
      }
    }
  }

  placeShipRandomly(ship: Ship, grid: Cell[][]): Ship | null {
    const maxAttempts = 100;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
      const startRow = Math.floor(Math.random() * 10);
      const startCol = Math.floor(Math.random() * 10);
      let fits = true;
      let coordinates: { row: number, col: number }[] = [];

      for (let i = 0; i < ship.size; i++) {
        let r = startRow;
        let c = startCol;
        if (orientation === 'horizontal') {
          c = startCol + i;
        } else {
          r = startRow + i;
        }
        if (r >= 10 || c >= 10) {
          fits = false;
          break;
        }
        if (grid[r][c].ship) {
          fits = false;
          break;
        }
        coordinates.push({ row: r, col: c });
      }
      if (fits) {
        const placedShip: Ship = { ...ship, coordinates: [] };
        for (let coord of coordinates) {
          grid[coord.row][coord.col].ship = placedShip;
          placedShip.coordinates.push(coord);
        }
        return placedShip;
      }
    }
    return null;
  }

  playerAttack(cell: Cell) {
    if (this.currentTurn !== 'player') return; 
    if (cell.hit) return; 

    cell.hit = true;

    if (cell.ship) {
      console.log('¡KOLPEA! En la máquina, celda', cell.row, cell.col, 'arma:', cell.ship.name);
    } else {
      console.log('¡URA! En la máquina, celda', cell.row, cell.col);
    }

    if (this.checkWin(this.machineGrid)) {
      alert("¡Has ganado!");
      return;
    }

    this.currentTurn = 'machine';
    setTimeout(() => this.machineAttack(), 1000);
  }

  machineAttack() {
    let available: Cell[] = [];
    for (let row of this.playerGrid) {
      for (let cell of row) {
        if (!cell.hit) {
          available.push(cell);
        }
      }
    }
    if (available.length === 0) return;
    const randomIndex = Math.floor(Math.random() * available.length);
    const cell = available[randomIndex];
    cell.hit = true;

    if (cell.ship) {
      console.log('La máquina ha hecho KOLPEA en', cell.row, cell.col, 'arma:', cell.ship.name);
    } else {
      console.log('La máquina ha hecho URA en', cell.row, cell.col);
    }

    if (this.checkWin(this.playerGrid)) {
      alert("¡La máquina ha ganado!");
      return;
    }
    this.currentTurn = 'player';
  }

  checkWin(grid: Cell[][]): boolean {
    for (let row of grid) {
      for (let cell of row) {
        if (cell.ship && !cell.hit) {
          return false;
        }
      }
    }
    return true;
  }

  goToNextPage() {
    this.navCtrl.navigateForward('/tabs/marijesiak-hutsuneak-bete');
  }

  goBack() {
    this.location.back();
  }
}
