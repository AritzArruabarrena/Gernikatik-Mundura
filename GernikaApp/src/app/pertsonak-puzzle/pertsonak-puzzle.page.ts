import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-pertsonak-puzzle',
  templateUrl: './pertsonak-puzzle.page.html',
  styleUrls: ['./pertsonak-puzzle.page.scss'],
  standalone: false
})
export class PertsonakPuzzlePage implements OnInit {

  constructor(private navCtrl: NavController,private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  goToNextPage() {
    this.navCtrl.navigateForward('/tabs/galderak-erantzuten');
  }
}
