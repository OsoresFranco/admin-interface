import { Component, OnInit, ViewChild} from '@angular/core';
import { RegUser } from '../../models/registeruser';
import { UsersService } from '../../services/users.service';
import { RegisterService } from '../../services/register.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'rol', 'direccion', 'telefono', 'email', 'vehiculo'];

  constructor(private users:UsersService, private modify:RegisterService) { }

  allClientes:RegUser[] = [];
  dataSource = new MatTableDataSource<RegUser>(this.allClientes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
    //Borrar Usuario
    deleteUser(user:RegUser){
      user.isAccepted = false;
      user.isDeleted = true;
      this.modify.save(user).subscribe(resp =>{});
      this.ngOnInit();
    }

        //Dialog modificar usuarios
        modificarNombre(user:RegUser) {
          Swal.fire({
            title: 'Modificar Nombre',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
          }).then((result) => {
            user.fullName = result.value;
            this.modify.save(user).subscribe(resp=>{
              Swal.fire(
                'Confirmado', 'Has Modificado correctamente el nombre', 'success'
              );
              this.ngOnInit()
            })
          })
        }
    
        modificarDireccion(user:RegUser) {
          Swal.fire({
            title: 'Modificar Direccion',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
          }).then((result) => {
            user.address = result.value;
            this.modify.save(user).subscribe(resp=>{
              Swal.fire(
                'Confirmado', 'Has Modificado correctamente la direccion'
              );
              this.ngOnInit()
            })
          })
        }
    
        modificarTelefono(user:RegUser) {
          Swal.fire({
            title: 'Modificar Teléfono',
            input: 'number',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
          }).then((result) => {
            user.cellPhone = String(result.value);
            this.modify.save(user).subscribe(resp=>{
              Swal.fire(
                'Confirmado', 'Has Modificado correctamente el Teléfono', 'success'
              );
              this.ngOnInit()
            })
          })
        }
    
        modificarEmail(user:RegUser) {
          Swal.fire({
            title: 'Modificar Email',
            input: 'email',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Confimar',
          }).then((result) => {
            user.email = result.value;
            this.modify.save(user).subscribe(resp=>{
              Swal.fire(
                'Confirmado', 'Has Modificado correctamente el Email', 'success'
              );
              this.ngOnInit()
            })
          })
        }
    
        modificarVehiculo(user:RegUser) {
          Swal.fire({
            title: 'Modificar Vehiculo',
            input: 'select',
            inputOptions: {
              'Vehiculos': {
                1: 'Bicicleta',
                2: 'Moto',
                3: 'Auto'},
              },
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
          }).then((result) => {
            user.vehicle!.id = Number(result.value);
            this.modify.save(user).subscribe(resp=>{
              Swal.fire(
                'Confirmado', 'Has Modificado correctamente el vehiculo', 'success'
              );
              this.ngOnInit()
            })
          })
        }

    ngOnInit(): void {

      this.users.getUsers().subscribe(resp =>{
        for(let cliente of resp){
          if(cliente.rol?.id === 3){
            this.allClientes.push(cliente);
          }
          this.dataSource.paginator = this.paginator;
        }
      })
    }
}