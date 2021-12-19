import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { RegUser } from '../../models/registeruser';
import { UsersService } from '../../services/users.service';
import { RegisterService } from '../../services/register.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{

  displayedColumns: string[] = ['nombre', 'rol', 'direccion', 'telefono', 'email', 'vehiculo'];
  userDataFull:RegUser[] = [];
  clientData:RegUser[] = [];
  cadeteData:RegUser[] = [];

  //Array Auxiliares
  cadeteDataaux:RegUser[] = [];
  clientDataaux:RegUser[] = [];

  // Paginator
  
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  allClientes:RegUser[] = [];
  allUsers:RegUser[] = [];
  allCadetes:RegUser[] = [];
  dataSource1 = new MatTableDataSource<RegUser>(this.allClientes);
  dataSource2 = new MatTableDataSource<RegUser>(this.allUsers);
  dataSource3 = new MatTableDataSource<RegUser>(this.allCadetes);


  constructor(private users:UsersService, private modify:RegisterService) { }

  //Borrar Usuario
  deleteUser(user:RegUser){
    user.isAccepted = false;
    user.isDeleted = true;
    this.modify.save(user).subscribe(resp =>{});
    this.ngOnInit();
  }

  // Obtener info de Listas
    ngOnInit(): void {

      this.users.getUsers().subscribe(resp =>{
        this.userDataFull = resp;
          //Filtrar Cadetes
        for (let user of this.userDataFull) {
          if( user.rol?.id == 2){
            this.cadeteDataaux.push(user);
          }};
          this.cadeteData = this.cadeteDataaux

          //Filtrar Clientes
        for (let user of this.userDataFull) {
          if( user.rol?.id == 3){
            this.clientDataaux.push(user);
          }};
          this.clientData = this.clientDataaux;

          for(let cliente of this.userDataFull){
            this.allClientes.push(cliente);
          }
          this.dataSource1.paginator = this.paginator;
      })
    }
}
