import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Usuario } from '../../model/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  crearUsuario() {
    if (this.userForm.invalid) {
      return;
    }

    this.usersService.crearUsuario(this.userForm.value)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );
  }
}