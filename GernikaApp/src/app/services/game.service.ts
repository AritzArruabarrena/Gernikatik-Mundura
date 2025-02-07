import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public winCounter: number = 0;

  constructor() { }
}
