import { Component, OnInit } from '@angular/core'; 
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kartakaurkitu',
  templateUrl: './kartakaurkitu.page.html',
  styleUrls: ['./kartakaurkitu.page.scss'],
  standalone: false,
})
export class KartakaurkituPage implements OnInit {
  allCards = [
    { id: 1, img: '../../assets/images/esku-pilota.png' },
    { id: 2, img: '../../assets/images/frontoia.png' },
    { id: 3, img: '../../assets/images/frontoia2.png' },
    { id: 4, img: '../../assets/images/irabazlea.png' },
    { id: 5, img: '../../assets/images/kamiseta.png' },
    { id: 6, img: '../../assets/images/Neska-jolasten.png' },
    { id: 7, img: '../../assets/images/pelotak.png' },
    { id: 8, img: '../../assets/images/zesta.png' }
  ];

  cards: any[] = [];
  selectedCards: any[] = [];
  constructor(private navCtrl: NavController, private location: Location, private router: Router) {}

  ngOnInit() {
    this.initializeCards();
    this.shuffleCards();
  }

  initializeCards() {
    const shuffled = [...this.allCards].sort(() => Math.random() - 0.5);
    const selectedPairs = shuffled.slice(0, 4);
    this.cards = [...selectedPairs, ...selectedPairs] 
      .map(card => ({ ...card, revealed: false })) 
      .sort(() => Math.random() - 0.5); 
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
    this.router.navigateByUrl('/tabs/hizkisopa');
  }

  goBack() {
    this.location.back();
  }
}
