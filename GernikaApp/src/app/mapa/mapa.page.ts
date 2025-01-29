import { Component, AfterViewInit  } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var google: any;

interface Marker {
  position: {
    lat: number,
    lng: number;
  };
  title: string;
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule] 
})
export class MapaPage implements AfterViewInit{
  map: any;
  markers: Marker[] = [
    { position: { lat: 43.31748, lng: -2.67833 }, title: 'Jai Alai Pilotalekua' },
    { position: { lat: 43.31326, lng: -2.67922 }, title: 'Batzarretxe eta Arbola' },
    { position: { lat: 43.31554, lng: -2.67881 }, title: 'Marijesiak (Udaletxean)' },
    { position: { lat: 43.31393, lng: -2.67885 }, title: 'Urriko Azken Astelehena (Pasilekuan)' },
    { position: { lat: 43.31303, lng: -2.67537 }, title: 'Astra' },
  ];

  constructor() {}

  ngAfterViewInit() {
    this.loadMap();
  }

  
  loadMap() {
    const mapEle: HTMLElement | null = document.getElementById('map'); // El valor puede ser null

    // Verificar si mapEle no es null antes de proceder
    if (mapEle) {
      const myLatLng = { lat: 43.31554, lng: -2.67881 }; // Centro en Marijesiak (Udaletxean)

      this.map = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 15, // Zoom más cercano para ver mejor los puntos en Gernika
      });

      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        this.renderMarkers();
        mapEle.classList.add('show-map');
      });
    } else {
      console.error('No se encontró el elemento del mapa');
    }
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title,
    });
  }

}
