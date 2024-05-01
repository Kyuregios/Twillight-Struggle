import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Obté el nom d'usuari emmagatzemat a sessionStorage
    const username = sessionStorage.getItem('user');

    // Comprova si l'usuari té el rol adequat per accedir a la ruta
    if (username === 'Admin') {
      return true; // Accés permès per als usuaris amb el rol d'administrador
    } else {
      this.router.navigate(['/']); // Redirigeix a una pàgina no autoritzada si l'usuari no té el rol adequat
      return false;
    }
  }
}