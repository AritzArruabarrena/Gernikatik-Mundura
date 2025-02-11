import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-produktu-puzzle',
  templateUrl: './produktu-puzzle.page.html',
  styleUrls: ['./produktu-puzzle.page.scss'],
  standalone: false
})
export class ProduktuPuzzlePage implements OnInit {

  constructor(private navCtrl: NavController,private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  goToNextPage() {
    this.navCtrl.navigateForward('/tabs/pertsonak-puzzle');
  }

}
