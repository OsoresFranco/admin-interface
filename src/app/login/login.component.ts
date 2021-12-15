import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { User } from './models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  }) 

  constructor(private loginservice:LoginService, private route:Router) { }

  user:User = {
    email: '',
    password: '',
    rol:{ id:0
    }
  }

  login(){
    this.user = this.loginform.value
    this.loginservice.login (String(this.user.email), String(this.user.password)).subscribe(  resp => {
    
    if(resp.rol.id === 2){
      Swal.fire(
        `Bienvenido ${resp.fullName}`,
        '',
        'success')
      localStorage.setItem('id', JSON.stringify(resp.id));
      this.route.navigate(['/inicio'])
    } else {
      Swal.fire(
        'Error al intentar ingresar',
        'Usuario o contraseña inválido',
        'error')
    }

    }, (error) =>{
        Swal.fire(
          'Error al intentar ingresar',
          'Usuario o contraseña inválido',
          'error')
    })
  }

}
