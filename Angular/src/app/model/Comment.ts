export class Comentario {
    private _id: number;
    private _player: number;
    private _comment_text: string;
    username?: string; // Nombre del usuario
  
    constructor(id: number, player: number, comment_text:string) { // Cambiado a tipo number
      this._id = id;
      this._player = player;
      this._comment_text = comment_text;
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
  
    get comment_text(): string {
      return this._comment_text;
    }
  
    set comment_text(value: string) {
      this._comment_text = value;
    }
}