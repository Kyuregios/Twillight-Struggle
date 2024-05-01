import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private showUrl = 'http://localhost:3000/users/player'; // URL de mostrar usuarios del backend
  private deleteUrl = 'http://localhost:3000/usersDelete'; // URL de eliminar usuario del backend
  private updateUrl = 'http://localhost:3000/usersUpdate'; // URL de editar usuario del backend
  private createUrl = 'http://localhost:3000/usersCreate'; // URL de editar usuario del backend

  constructor(private http: HttpClient) { }

  // Método para mostrar los usuarios de rol player
  obtenerUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.showUrl);
  }

  // Método para eliminar un usuario
  eliminarUsuario(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.deleteUrl}/${id}`);
  }

  // Método para editar un usuario
  updateUser(user: Usuario): Observable<Usuario> {
    const url = `${this.updateUrl}/${user.id}`;
    return this.http.put<Usuario>(url, user);
  }

  // Método para crear un usuario
  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.createUrl, usuario);
  }

}
