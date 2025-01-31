import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-kartakaurkitu',
  templateUrl: './kartakaurkitu.page.html',
  styleUrls: ['./kartakaurkitu.page.scss'],
  standalone: false,
})
export class KartakaurkituPage implements OnInit {
  cards = [
    { id: 1, img: '../../assets/images/cuadro.jpg', revealed: false },
    { id: 2, img: '../../assets/images/pelota.jpg', revealed: false },
    { id: 1, img: '../../assets/images/cuadro.jpg', revealed: false },
    { id: 2, img: '../../assets/images/pelota.jpg', revealed: false },
  ];
  selectedCards: any[] = [];
  constructor(private navCtrl: NavController, private location: Location) {}

  ngOnInit() {
    this.shuffleCards();
  }

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5);
  }

  revealCard(index: number) {
    if (this.selectedCards.length < 2 && !this.cards[index].revealed) {
      this.cards[index].revealed = true;
      this.selectedCards.push({ ...this.cards[index], index });

      if (this.selectedCards.length === 2) {
        setTimeout(() => this.checkMatch(), 1000);
      }
    }
  }

  checkMatch() {
    if (this.selectedCards[0].id !== this.selectedCards[1].id) {
      this.selectedCards.forEach(
        (card) => (this.cards[card.index].revealed = false)
      );
    }
    this.selectedCards = [];
  }

  goToNextPage() {
    this.navCtrl.navigateForward('/tabs/next-level');
  }
  goBack() {
    this.location.back(); 
  }
}
