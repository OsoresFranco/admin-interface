import { Component, OnInit, ViewChild} from '@angular/core';
import { RegUser } from '../../models/registeruser';
import { UsersService } from '../../services/users.service';
import { RegisterService } from '../../services/register.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';

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