import { Component, OnInit, ViewChild} from '@angular/core';
import { RegUser } from '../../models/registeruser';
import { UsersService } from '../../services/users.service';
import { RegisterService } from '../../services/register.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'rol', 'direccion', 'telefono', 'email', 'vehiculo'];

  constructor(private users:UsersService, private modify:RegisterService, public dialog: MatDialog) { }

  allAdmins:RegUser[] = [];
  dataSource = new MatTableDataSource<RegUser>(this.allAdmins);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
    //Borrar Usuario
    deleteUser(user:RegUser){
      user.isAccepted = false;
      user.isDeleted = true;
      this.modify.save(user).subscribe(resp =>{});
      this.ngOnInit();
    }

    //Dialog modificar usuarios
    openDialog(user:RegUser) {
      
    }


    // Fetch de Admins
    ngOnInit(): void {

      this.users.getUsers().subscribe(resp =>{
        for(let admin of resp){
          if(admin.rol?.id === 1){
            this.allAdmins.push(admin);
          }
          this.dataSource.paginator = this.paginator;
        }
      })
    }
}
