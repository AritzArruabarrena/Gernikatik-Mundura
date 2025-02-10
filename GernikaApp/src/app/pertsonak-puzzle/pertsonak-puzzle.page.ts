import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-pertsonak-puzzle',
  templateUrl: './pertsonak-puzzle.page.html',
  styleUrls: ['./pertsonak-puzzle.page.scss'],
  standalone: false
})
export class PertsonakPuzzlePage implements OnInit {
  showWinImage: boolean = false;
  winImage: string = '';

  constructor(
    private navCtrl: NavController,
    private location: Location,
    private gameService: GameService
  ) { }

  ngOnInit() {}

  goBack() {
    this.location.back();
  }

  goToNextPage() {
    this.gameService.winCounter += 1;
    this.winImage = `../../assets/images/caminito${this.gameService.winCounter}.png`;
    this.showWinImage = true;
    setTimeout(() => {
      this.showWinImage = false;
      this.navCtrl.navigateForward('/tabs/tab1');
    }, 4000);
  }
}
