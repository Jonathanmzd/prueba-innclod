import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
    ) {

    this.formLogin = this.formBuilder.group({
      usuario: ['jonathan.ardila@gmail.com', Validators.required],
      password: ['password', Validators.required]
    });
   }

  ngOnInit() {

  }

  /**
   * Función para realizar el login
   */
  submit() {
    let params = {
      "email" : this.formLogin.value.usuario,
      "password" : this.formLogin.value.password
    };

    this.auth.login(params).subscribe( res => {

      let token = res.data.token;
      let nombre_user = res.data.user.name;
      let id_user = res.data.user.id;

      // Asignacion de variables
      localStorage.setItem('token', token);
      localStorage.setItem('nombre_user', nombre_user);
      localStorage.setItem('id_user', id_user);

      if(this.auth.getToken() != null)
        this.router.navigate(['documentos/']);

    }, (error: any) => {
      alert('Usuario o contraseña incorrecto');
      console.log(error);
    });
  }
}
