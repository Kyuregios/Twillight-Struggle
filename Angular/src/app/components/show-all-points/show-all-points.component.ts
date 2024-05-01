import { Component, OnInit } from '@angular/core';
import { Juego } from '../../model/Game';
import { GamesService } from '../../services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-points',
  templateUrl: './show-all-points.component.html',
  styleUrls: ['./show-all-points.component.css']
})
export class ShowAllPointsComponent implements OnInit {
  partidas: Juego[] = [];

  constructor(private gameService: GamesService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.mostrarPartidas();
  }

  mostrarPartidas(){
    this.gameService.obtenerPartidas().subscribe(
      (data) => {
        this.partidas = data;
        console.log('Partidas:', this.partidas);
      }
    );
  }

  eliminarPartida(id: number) {
    this.gameService.eliminarPartida(id).subscribe({
      next: () => {
        // Recargar la lista de usuarios o eliminar el usuario del array localmente
        console.log('Partida eliminada correctamente');
        this.partidas = this.partidas.filter(juego => juego.id !== id);
      },
      error: (error) => {
        console.error('Hubo un error al eliminar la partida:', error);
      }
    });
  }
}
