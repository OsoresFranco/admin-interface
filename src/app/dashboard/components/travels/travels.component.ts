import { Component, OnInit} from '@angular/core';
import { StatusTravel } from '../../models/statusTravel';
import { TravelService } from '../../services/travel.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit{

  constructor(private travel:TravelService ) { }

  displayedColumns: string[] = ['fullName', 'address', 'statusTravel', 'action'];
  viajesActivos:StatusTravel[] = [];
  viajesPendientes:StatusTravel[] = [];
  viajesEnCurso:StatusTravel[] = [];


  ngOnInit(){
    let status1 = this.travel.estadodelviaje(1);
    let status2 = this.travel.estadodelviaje(2);
    let status3 = this.travel.estadodelviaje(3);
    let status4 = this.travel.estadodelviaje(4);
    let status5 = this.travel.estadodelviaje(5);
    let status6 = this.travel.estadodelviaje(6);
    let status7 = this.travel.estadodelviaje(7);
    let status8 = this.travel.estadodelviaje(8);

// Viajes Activos
    forkJoin([status1, status2, status3, status4, status5, status6, status7, status8]).subscribe(resp =>{
    this.viajesActivos = [...resp[0],...resp[1],...resp[2],...resp[3],...resp[4],...resp[5],...resp[6],...resp[7]];
  })

// Viajes pendientes
  forkJoin([status1, status5]).subscribe(resp =>{
    this.viajesPendientes = [...resp[0], ...resp[1]];

  })

// Viajes en Curso
  forkJoin([status2, status3, status6, status7]).subscribe(resp =>{
    this.viajesEnCurso = [...resp[0], ...resp[1], ...resp[2], ...resp[3]]
  })

  }
}