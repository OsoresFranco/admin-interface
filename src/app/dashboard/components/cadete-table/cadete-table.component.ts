import { Component, OnInit, ViewChild} from '@angular/core';
import { RegUser } from '../../models/registeruser';
import { UsersService } from '../../services/users.service';
import { RegisterService } from '../../services/register.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cadete-table',
  templateUrl: './cadete-table.component.html',
  styleUrls: ['./cadete-table.component.scss']
})
export class CadeteTableComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'rol', 'direccion', 'telefono', 'email', 'vehiculo'];

  constructor(private users:UsersService, private modify:RegisterService) { }

  allCadetes:RegUser[] = [];
  dataSource = new MatTableDataSource<RegUser>(this.allCadetes);

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
        for(let cadete of resp){
          if(cadete.rol?.id === 2){
            this.allCadetes.push(cadete);
          }
          this.dataSource.paginator = this.paginator;
        }
      })
    }
}
