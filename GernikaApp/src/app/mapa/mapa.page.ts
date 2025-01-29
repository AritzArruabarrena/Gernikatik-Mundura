import { Component, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var google: any;

interface Marker {
  position: {
    lat: number;
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
export class MapaPage implements AfterViewInit {
   
  map: any;
  markers: Marker[] = [
    { position: { lat: 43.31748, lng: -2.67833 }, title: 'Jai Alai Pilotalekua' },
    { position: { lat: 43.31326, lng: -2.67922 }, title: 'Batzarretxe eta Arbola' },
    { position: { lat: 43.31554, lng: -2.67881 }, title: 'Marijesiak (Udaletxean)' },
    { position: { lat: 43.31393, lng: -2.67885 }, title: 'Urriko Azken Astelehena (Pasilekuan)' },
    { position: { lat: 43.31303, lng: -2.67537 }, title: 'Astra' },
  ];
  infoWindow: any;

  constructor(private location: Location) {}  // Inyección del servicio Location

  goBack() {
    this.location.back(); // Regresa a la página anterior
  }
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

      this.infoWindow = new google.maps.InfoWindow(); // Crear una instancia de InfoWindow

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
    const googleMarker = new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title,
    });

    // Mostrar el InfoWindow al hacer clic en el marcador
    googleMarker.addListener('click', () => {
      this.infoWindow.setContent(marker.title); // Establecer el contenido como el título
      this.infoWindow.open(this.map, googleMarker); // Abrir el InfoWindow sobre el marcador
    });
  }
}
