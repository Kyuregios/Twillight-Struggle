import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../model/Comment';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-show-comments',
  templateUrl: './show-comments.component.html',
  styleUrls: ['./show-comments.component.css']
})
export class ShowCommentsComponent implements OnInit {
  comentarios: Comentario[] = [];

  constructor(private commentService: CommentsService) { 
    
  }

  ngOnInit(): void {
    this.mostrarComentarios();
  }

  mostrarComentarios(){
    this.commentService.obtenerComentarios().subscribe(
      (data) => {
        this.comentarios = data;
        console.log('Comentarios:', this.comentarios);
      }
    );
  }

  eliminarComentario(id: number) {
    this.commentService.eliminarComentario(id).subscribe({
      next: () => {
        // Recargar la lista de usuarios o eliminar el usuario del array localmente
        console.log('Partida eliminada correctamente');
        this.comentarios = this.comentarios.filter(comentario => comentario.id !== id);
      },
      error: (error) => {
        console.error('Hubo un error al eliminar la partida:', error);
      }
    });
  }
}