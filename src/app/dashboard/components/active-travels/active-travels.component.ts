import { Component, OnInit, ViewChild} from '@angular/core';
import { StatusTravel } from '../../models/statusTravel';
import { TravelService } from '../../services/travel.service';
import { forkJoin } from 'rxjs';
import { ChangestatusService } from '../../services/changestatus.service';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-active-travels',
  templateUrl: './active-travels.component.html',
  styleUrls: ['./active-travels.component.scss']
})
export class ActiveTravelsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private travel:TravelService, private change:ChangestatusService) { }
  displayedColumns: string[] = ['fullName', 'address', 'statusTravel', 'action', 'reassigned'];


  renunciar = new FormControl('false');
  changeStatusViaje(travel:number,statusTr:number,cadete:number,reassigned:boolean){
    Swal.fire({
      title: "Ingresa el ID del Cadete",
      text: "Recuerda que debe ser un ID válido para este rol.",
      input: 'number',
      showCancelButton: true        
  }).then((result) => {
      if (result.value) {
          let cadete = result.value;
          reassigned = this.renunciar.value;
          this.change.changeStatus(travel, statusTr, cadete, reassigned).subscribe(resp=>{
            Swal.fire(
              'Confirmado', 'Has Cambiado el estado del Viaje', 'success'
            );
            this.ngOnInit()
          }, 
            error => {
              Swal.fire(
                'Hubo un error', 'Hubo un error al procesar este movimiento', 'error'
              );
            })
      } })
  }

  viajesactivos:StatusTravel[] = [];
  viajesactivosAux:StatusTravel[] = [];
  dataSource = new MatTableDataSource<StatusTravel>(this.viajesactivosAux);

  ngOnInit(): void {
    let status1 = this.travel.estadodelviaje(1);
    let status2 = this.travel.estadodelviaje(2);
    let status3 = this.travel.estadodelviaje(3);
    let status4 = this.travel.estadodelviaje(4);
    let status5 = this.travel.estadodelviaje(5);
    let status6 = this.travel.estadodelviaje(6);
    let status7 = this.travel.estadodelviaje(7);
    let status8 = this.travel.estadodelviaje(8);

    forkJoin([status1, status2, status3, status4, status5, status6, status7, status8]).subscribe(resp =>{
      this.viajesactivos = [...resp[0],...resp[1],...resp[2],...resp[3],...resp[4],...resp[5],...resp[6],...resp[7]];
      for(let viaje of this.viajesactivos){
        this.viajesactivosAux.push(viaje)
      }
      this.dataSource.paginator = this.paginator;
    })
  }

}