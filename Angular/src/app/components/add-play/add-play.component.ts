import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Juego } from '../../model/Game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-add-play',
  templateUrl: './add-play.component.html',
  styleUrls: ['./add-play.component.css']
})
export class AddPlayComponent implements OnInit {

  gameForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      player: ['', Validators.required],
      rival: ['', Validators.required],
      points: ['', Validators.required],
      win: [false]
    });
  }

  crearPartida(): void {
    if (this.gameForm.invalid) {
      return;
    }

    const gameData: Juego = this.gameForm.value;
    this.gameService.crearPartida(gameData)
      .subscribe(response => {
        console.log('Partida creada correctamente:', response);
      }, error => {
        console.error('Error creando partida:', error);
      });
  }
}

