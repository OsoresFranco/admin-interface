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
  selector: 'app-current-travels',
  templateUrl: './current-travels.component.html',
  styleUrls: ['./current-travels.component.scss']
})
export class CurrentTravelsComponent implements OnInit {

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

  viajesEnCurso:StatusTravel[] = [];
  viajesEnCursoAux:StatusTravel[] = [];
  dataSource = new MatTableDataSource<StatusTravel>(this.viajesEnCursoAux);

  ngOnInit(): void {
    let status2 = this.travel.estadodelviaje(2);
    let status3 = this.travel.estadodelviaje(3);
    let status6 = this.travel.estadodelviaje(6);
    let status7 = this.travel.estadodelviaje(7);

    forkJoin([status2, status3, status6, status7]).subscribe(resp =>{
      this.viajesEnCurso = [...resp[0], ...resp[1], ...resp[2], ...resp[3]];
      for(let viaje of this.viajesEnCurso){
        this.viajesEnCursoAux.push(viaje)
      }
      this.viajesEnCurso = this.viajesEnCursoAux
      this.dataSource.paginator = this.paginator;
    })
  }

}
