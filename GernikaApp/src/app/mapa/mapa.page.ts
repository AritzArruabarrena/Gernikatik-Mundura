import { Component, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  markers: Marker[] = [];  // Inicialmente vacío, se llenará con los datos de la API
  infoWindow: any;

  // Inyectamos HttpClient y Location
  constructor(private location: Location, private http: HttpClient) {}

  goBack() {
    this.location.back(); // Regresa a la página anterior
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    const mapEle: HTMLElement | null = document.getElementById('map');

    if (mapEle) {
      const myLatLng = { lat: 43.31554, lng: -2.67881 };

      this.map = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 15,
      });

      this.infoWindow = new google.maps.InfoWindow();

      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        // Una vez cargado el mapa, obtenemos los marcadores desde la API
        this.fetchMarkers();
        mapEle.classList.add('show-map');
      });
    } else {
      console.error('No se encontró el elemento del mapa');
    }
  }

  // Método para obtener los marcadores desde la API
  fetchMarkers() {
    const url = 'http://192.168.73.128/api/places';

    this.http.get<any>(url).subscribe(
      response => {
        // Se espera que la respuesta tenga la propiedad "data"
        if (response && response.data) {
          // Convertir cada objeto del array a nuestro formato Marker
          this.markers = response.data.map((item: any) => ({
            position: {
              lat: parseFloat(item.latitude),
              lng: parseFloat(item.longitude)
            },
            title: item.name
          }));

          // Una vez obtenidos los marcadores, los renderizamos en el mapa
          this.renderMarkers();
        } else {
          console.error('La respuesta de la API no contiene la propiedad "data".', response);
        }
      },
      error => {
        console.error('Error al obtener los marcadores:', error);
      }
    );
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
      this.infoWindow.setContent(marker.title);
      this.infoWindow.open(this.map, googleMarker);
    });
  }
}
