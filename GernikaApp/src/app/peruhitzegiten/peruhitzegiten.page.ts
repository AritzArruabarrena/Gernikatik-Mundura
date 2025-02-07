import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from 'src/app/services/game.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-peruhitzegiten',
  templateUrl: './peruhitzegiten.page.html',
  styleUrls: ['./peruhitzegiten.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] 
})
export class PeruhitzegitenPage {
  showWinImage: boolean = false;
  winImage: string = '';

  constructor(
    private router: Router, 
    private location: Location,
    private gameService: GameService  
  ) {}

  goToNextPage() {
    this.gameService.winCounter = 0;
    this.winImage = `../../assets/images/caminito${this.gameService.winCounter}.png`;
    this.showWinImage = true;
    setTimeout(() => {
      this.showWinImage = false;
      this.router.navigateByUrl('/tabs/kartakaurkitu');
    }, 4000);
  }

  goBack() {
    this.location.back();
  }

  goMap(){
    this.router.navigateByUrl('/tabs/mapa');
  }
}
