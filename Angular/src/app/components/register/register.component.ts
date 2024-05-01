import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registroForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmarContraseña: new FormControl('', Validators.required)
    });
  }

  registrarUsuario() {
    if (this.registroForm.valid) {
      const { username, email, password } = this.registroForm.value;
      this.authService.registrarUsuario(username, email, password)
        .subscribe(
          response => {
            console.log(response.message);
            sessionStorage.setItem('user', this.registroForm.value.username);//Creo una sessionStorage con el username
            this.authService.irAPaginaPrincipal(); // Redirige al usuario a la página principal después del registro exitoso
            this.authService.setLoggedIn(true);
          },
          error => {
            console.error(error.error);
          }
        );
    } else {
      // Formulario no válido, realizar alguna acción o mostrar mensajes de error.
    }
  }

  
}
