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
  markers: Marker[] = [];  // Inicialmente vacío, se llenará con los datos de la API o del localStorage
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
        // Una vez cargado el mapa, se obtienen los marcadores desde la API (o del localStorage en caso de error)
        this.fetchMarkers();
        mapEle.classList.add('show-map');
      });
    } else {
      console.error('No se encontró el elemento del mapa');
    }
  }

  /**
   * Método para obtener los marcadores desde la API.
   * Si la respuesta es correcta se guarda en localStorage para usarla como respaldo.
   */
  fetchMarkers() {
    const url = 'http://192.168.73.128/api/places';

    this.http.get<any>(url).subscribe(
      response => {
        if (response && response.data) {
          // Guardamos la respuesta en localStorage para usarla como respaldo
          localStorage.setItem('markersData', JSON.stringify(response));
          this.procesarMarkers(response);
        } else {
          console.error('La respuesta de la API no contiene la propiedad "data":', response);
          this.cargarMarkersDesdeLocalStorage();
        }
      },
      error => {
        console.error('Error al obtener los marcadores desde la API:', error);
        this.cargarMarkersDesdeLocalStorage();
      }
    );
  }

  /**
   * Procesa la respuesta de la API (o de localStorage) y transforma los datos en nuestro formato Marker.
   * @param response Objeto con la propiedad "data" que contiene los marcadores.
   */
  procesarMarkers(response: any) {
    this.markers = response.data.map((item: any) => ({
      position: {
        lat: parseFloat(item.latitude),
        lng: parseFloat(item.longitude)
      },
      title: item.name
    }));
    this.renderMarkers();
  }

  /**
   * Intenta cargar los marcadores desde localStorage en caso de error en la API.
   */
  cargarMarkersDesdeLocalStorage() {
    const storedData = localStorage.getItem('markersData');
    if (storedData) {
      try {
        const response = JSON.parse(storedData);
        this.procesarMarkers(response);
      } catch (error) {
        console.error('Error parseando los datos almacenados en localStorage:', error);
      }
    } else {
      console.error('No hay datos almacenados en localStorage para los marcadores.');
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
      this.infoWindow.setContent(marker.title);
      this.infoWindow.open(this.map, googleMarker);
    });
  }
}
