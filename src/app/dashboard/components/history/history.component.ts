import { Component, OnInit } from '@angular/core';
import { StatusTravel } from '../../models/statusTravel';
import { TravelService } from '../../services/travel.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private travel:TravelService) { }
  refresh(){
    console.log(this.historyData)
  }

  displayedColumns: string[] = ['cadete', 'cliente', 'fecha', 'hora', 'estadoDelPedido'];
  history:StatusTravel[] =[]
  historyData:StatusTravel[] =[]

  ngOnInit(): void {
    let status5 = this.travel.estadodelviaje(5);
    let status8 = this.travel.estadodelviaje(8);
    let status9 = this.travel.estadodelviaje(9);


// Viajes Activos
    forkJoin([status5, status8, status9]).subscribe(resp =>{

      this.historyData = [...resp[0],...resp[1],...resp[2]];
    })
  }

}
