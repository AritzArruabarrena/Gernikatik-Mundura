import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  puntos = [
    {
      nombre: 'marihitzegiten',
      lat: 43.17927377372057,
      lng: -2.4895303693663533,
    },
    { nombre: 'pertsonak-puzzle', lat: 43.31748, lng: -2.67833 },
    { nombre: 'kartakaurkitu', lat: 43.31748, lng: -2.67833 },
    { nombre: 'galderak-erantzuten', lat: 43.31393, lng: -2.67885 },
    { nombre: 'marijesia-ordenatu', lat: 43.31554, lng: -2.67881 },
  ];

  juegoEnCurso: boolean = false;

  constructor(private router: Router) {}

  goMap() {
    this.router.navigateByUrl('/tabs/mapa');
  }

  async verificarUbicacion() {
    const permisos = await Geolocation.requestPermissions();

    if (permisos.location !== 'granted') {
      alert('Se requieren permisos de ubicación para jugar.');
      return;
    }

    const posicion = await Geolocation.getCurrentPosition();

    if (posicion && posicion.coords) {
      const lat = posicion.coords.latitude;
      const lng = posicion.coords.longitude;
      console.log(`Ubicación actual: ${lat}, ${lng}`);
      this.checkNearby(lat, lng);
    } else {
      alert('No se pudo obtener la ubicación.');
    }
  }

  getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c * 1000;
  }

  checkNearby(lat: number, lng: number) {
    if (this.juegoEnCurso) return;

    const radio = 20;
    let cercaDeUnPunto = false;

    this.puntos.forEach((punto) => {
      const distancia = this.getDistance(lat, lng, punto.lat, punto.lng);

      if (distancia < radio) {
        console.log(`Cerca de ${punto.nombre} a ${distancia.toFixed(2)}m`);
        this.iniciarJuego(punto.nombre);
        cercaDeUnPunto = true;
      }
    });

    if (!cercaDeUnPunto) {
      alert('No estás cerca de ningún punto de juego.');
    }
  }

  iniciarJuego(nombre: string) {
    if (this.juegoEnCurso) return;

    this.juegoEnCurso = true;
    alert(`Iniciando juego en: ${nombre}`);
    this.router.navigateByUrl(`/tabs/${nombre}`);
  }
}
