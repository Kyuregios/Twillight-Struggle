import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from '../model/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private showUrl = 'http://localhost:3000/games'; // URL de mostrar partidas del backend
  private deleteUrl = 'http://localhost:3000/gamesDelete'; // URL de eliminar partida del backend
  private createUrl = 'http://localhost:3000/gamesCreate'; // URL de eliminar partida del backend

  constructor(private http: HttpClient) { }

  obtenerPartidas(): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.showUrl);
  }

  // Método para eliminar una partida por ID
  eliminarPartida(id: number): Observable<Juego> {
    return this.http.delete<Juego>(`${this.deleteUrl}/${id}`);
  }

  crearPartida(gameData: Juego): Observable<Juego> {
    return this.http.post<Juego>(this.createUrl, gameData);
  }
}
