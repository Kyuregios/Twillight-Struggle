export class Juego {
    private _id: number;
    private _player: number;
    private _rival: number;
    private _points: number;
    private _win: number; // Cambiado a tipo number
    username?: string; // Nombre del usuario
  
    constructor(id: number, player: number, rival:number, points: number, win: number) { // Cambiado a tipo number
      this._id = id;
      this._player = player;
      this._rival = rival;
      this._points = points;
      this._win = win;
    }
  
    get id(): number {
      return this._id;
    }
  
    set id(value: number) {
      this._id = value;
    }
  
    get player(): number {
      return this._player;
    }
  
    set player(value: number) {
      this._player = value;
    }
  
    get rival(): number {
      return this._rival;
    }
  
    set rival(value: number) {
      this._rival = value;
    }
  
    get points(): number {
      return this._points;
    }
  
    set points(value: number) {
      this._points = value;
    }
  
    get win(): boolean { // Cambiado a tipo boolean
      return this._win === 1; // Convertir el valor numérico a boolean
    }
  
    set win(value: boolean) { // Cambiado a tipo boolean
      this._win = value ? 1 : 0; // Convertir el valor bool
    }
}