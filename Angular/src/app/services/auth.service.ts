import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from '../model/User';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:3000/login'; // URL de login mediante backend
  private registerUrl = 'http://localhost:3000/registro'; // URL de registro mediante backend
  private isLoggedInVar = false; // Variable para almacenar el estado de autenticación

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }
  
  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.isLoggedInVar;
  }

  setLoggedIn(value: boolean) {
    this.isLoggedInVar = value;
  }


  login(username: string, password: string ): Observable<any> {
    return this.http.post<any>(`${this.loginUrl}`, { username, password }, { withCredentials: true });
  }

  // Método para cerrar sesión
  logout(): void {
    sessionStorage.removeItem('user');
    sessionStorage.clear();
    this.isLoggedInVar = false;
    this.router.navigate(['/']);
    window.location.reload();
  }

  registrarUsuario(username: string, email: string, password: string) {
    const usuario = { username, email, password};
    return this.http.post<any>(this.registerUrl, usuario, { withCredentials: true });
  }

  // Añade este método si aún no lo tienes
  irAPaginaPrincipal(): void {
    this.router.navigate(['/']);
  }
}