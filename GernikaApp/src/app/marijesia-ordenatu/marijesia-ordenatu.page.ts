import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NavController } from '@ionic/angular';
import { GameService } from 'src/app/services/game.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-marijesia-ordenatu',
  templateUrl: './marijesia-ordenatu.page.html',
  styleUrls: ['./marijesia-ordenatu.page.scss'],
  standalone: false
})
export class MarijesiaOrdenatuPage implements OnInit {
  // Variables y manejo de audio
  private audio: HTMLAudioElement;
  isPlaying = false;
  audioLoaded = false; 

  // Los versos se obtendrán desde la API
  sentences: string[] = [];   // Arreglo mezclado para que el usuario lo ordene
  correctOrder: string[] = [];  // Arreglo con el orden correcto (por número de verso)

  // Variables para la imagen ganadora
  showWinImage: boolean = false;
  winImage: string = '';

  constructor(
    private location: Location,
    private navCtrl: NavController,
    private gameService: GameService,
    private http: HttpClient   // Inyección de HttpClient para consumir la API
  ) {
    this.audio = new Audio('../../assets/audio/UrteBarriBarri.mp3');
    this.audio.preload = 'auto';

    this.audio.addEventListener('canplaythrough', () => {
      this.audioLoaded = true;
    });
  }

  ngOnInit() {
    // Al iniciar el componente, se obtienen los datos de la canción
    this.fetchSongData();
  }

  goBack() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
    this.location.back();
  }

  async playAudio() {
    if (!this.audioLoaded) {
      await this.loadAudio();
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
    } catch (error) {
      console.error("Error precargando el audio:", error);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sentences, event.previousIndex, event.currentIndex);
  }

  checkOrder() {
    if (JSON.stringify(this.sentences) === JSON.stringify(this.correctOrder)) {
      this.gameService.winCounter += 1;
      this.winImage = `../../assets/images/caminito${this.gameService.winCounter}.png`;
      this.showWinImage = true;
      setTimeout(() => {
        this.showWinImage = false;
        this.navCtrl.navigateForward('/tabs/produktu-puzzle');
      }, 4000);
    } else {
      alert("Inténtalo de nuevo.");
    }
  }

  /**
   * Método para obtener la canción y sus versos desde la API.
   * Si la API responde correctamente, se guarda la respuesta en localStorage;
   * en caso de error, se carga la copia almacenada.
   */
  fetchSongData() {
    const url = 'http://192.168.73.128/api/song';
    this.http.get<any>(url).subscribe(
      response => {
        if (response && response.verses) {
          // Guardamos la respuesta en localStorage para usarla como respaldo
          localStorage.setItem('songData', JSON.stringify(response));
          this.procesarCancion(response);
        } else {
          console.error('La respuesta de la API no contiene versos:', response);
          this.cargarCancionDesdeLocalStorage();
        }
      },
      error => {
        console.error('Error al obtener la canción desde la API:', error);
        this.cargarCancionDesdeLocalStorage();
      }
    );
  }

  /**
   * Intenta cargar la canción desde localStorage en caso de no tener conexión o error en la API.
   */
  cargarCancionDesdeLocalStorage() {
    const storedData = localStorage.getItem('songData');
    if (storedData) {
      try {
        const response = JSON.parse(storedData);
        this.procesarCancion(response);
      } catch (error) {
        console.error('Error parseando los datos almacenados:', error);
      }
    } else {
      console.error('No hay datos almacenados en localStorage.');
      // Aquí podrías notificar al usuario que no hay datos disponibles o activar otro fallback.
    }
  }

  /**
   * Procesa la respuesta (de la API o de localStorage) y establece los arrays correctOrder y sentences.
   * @param response Objeto con la información de la canción y sus versos.
   */
  procesarCancion(response: any) {
    // Ordenamos los versos por su número (por si acaso no vienen ordenados)
    const verses = response.verses.sort((a: any, b: any) => a.number - b.number);
    // Convertimos cada verso uniendo sus líneas en una sola cadena
    this.correctOrder = verses.map((verse: any) => verse.lines.join(' '));
    // Creamos un arreglo mezclado a partir del orden correcto para que el usuario deba ordenarlo
    this.sentences = this.shuffleArray([...this.correctOrder]);
  }

  /**
   * Función auxiliar para mezclar un arreglo (algoritmo Fisher-Yates).
   * @param array Arreglo a mezclar.
   * @returns El arreglo mezclado.
   */
  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
