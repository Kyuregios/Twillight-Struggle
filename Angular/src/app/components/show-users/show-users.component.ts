import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/User';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  usuarios: Usuario[] = [];
  editForm!: FormGroup; // Declarar el formulario reactivo
  showEditForm: boolean = false;

  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.mostrarUsuario();

    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  mostrarUsuario(){
    this.userService.obtenerUsuario().subscribe(
      (data) => {
        this.usuarios = data;
        console.log('Usuarios:', this.usuarios);
      }
    );
  }

  eliminarUsuario(id: number) {
    this.userService.eliminarUsuario(id).subscribe({
      next: () => {
        // Recargar la lista de usuarios o eliminar el usuario del array localmente
        console.log('Usuario eliminado correctamente');
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
      },
      error: (error) => {
        console.error('Hubo un error al eliminar el usuario:', error);
      }
    });
  }

  // Método para cargar los datos del usuario seleccionado en el formulario de edición
  cargarUsuario(user: Usuario) {
    this.editForm.patchValue({
      id: user.id,
      username: user.username,
      email: user.email
    });
    this.showEditForm = true;
  }

  onSubmit() {
    const editedUser = this.editForm.value;
    this.userService.updateUser(editedUser).subscribe(updatedUser => {
      console.log('Usuario actualizado:', updatedUser);
      // Realizar acciones adicionales si es necesario
      this.showEditForm = false;
      this.mostrarUsuario();
    }, error => {
      console.error('Error al actualizar usuario:', error);
    });
  }

  onCancel() {
    // Reiniciar el formulario y ocultar el formulario de edición
    this.editForm.reset();
    this.showEditForm = false;
  }
}