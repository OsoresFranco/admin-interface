import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { RegUser } from '../../models/registeruser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formularioRegistro = new FormGroup({
    fullName : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    cellPhone : new FormControl('', Validators.required)
  })


  constructor( private signupservice:RegisterService) { }

  user1:RegUser = {
    fullName: '',
    email: '',
    password: '',
    address: '',
    cellPhone: ''
  }

  ngOnInit(): void {
  }
// Inicio de Función Validador Email
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe ingresar un Email válido';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
// Fin de Función Validador Email

  registrarUser():void{
    this.user1 = this.formularioRegistro.value;
    console.log(this.user1)
    this.signupservice.save(this.user1).subscribe( resp => {
      console.log(resp)
    });
    this.formularioRegistro.reset()
    alert("Bienvenido "+ this.user1.fullName)
  }
}
