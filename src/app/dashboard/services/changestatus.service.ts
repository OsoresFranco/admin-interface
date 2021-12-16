import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeTravel } from '../models/changeTravel';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChangestatusService {

  constructor(private http:HttpClient) { }

  changeStatus(travelId:number,statusTravel:number,cadeteId:number,reassigned:boolean): Observable<ChangeTravel> {
    return this.http.post<ChangeTravel>(`api/Travel?travelId=${travelId}&statusTravel=${statusTravel}&userOperation=1&cadeteId=${cadeteId}&isReasigned=${reassigned}&observations=nada`,travelId)
  } 
  
}
