import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private cookieService: CookieService) {
    
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  // Método para enviar el formulario
  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(result => {
        if (result.success) {
          sessionStorage.setItem('user', this.loginForm.value.username);//Creo una sessionStorage con el username
          this.authService.irAPaginaPrincipal(); // Redirige al usuario a la página principal después del registro exitoso
          this.authService.setLoggedIn(true);
          console.log('Login exitoso');
        } else {
          // Lógica para cuando el login falla
          console.log('Login fallido');
        }
      });
    }
  }
}