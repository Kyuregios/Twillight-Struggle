import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from '../model/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private showUrl = 'http://localhost:3000/comments'; // URL de mostrar comentarios del backend
  private deleteUrl = 'http://localhost:3000/commentsDelete'; // URL de eliminar comentarios del backend
  private createUrl = 'http://localhost:3000/commentsCreate'; // URL de crear comentarios del backend

  constructor(private http: HttpClient) { }

  obtenerComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.showUrl);
  }

  // Método para eliminar un comentario por ID
  eliminarComentario(id: number): Observable<Comentario> {
    return this.http.delete<Comentario>(`${this.deleteUrl}/${id}`);
  }

  crearComment(comment: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(this.createUrl, comment);
  }
}
