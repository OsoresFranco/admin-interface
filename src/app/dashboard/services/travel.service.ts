import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatusTravel } from '../models/statusTravel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http:HttpClient) { }

  estadodelviaje(status:number):Observable<StatusTravel[]>{
    return this.http.get<StatusTravel[]>(`/api/Travel/1/${status}`)
  }

}
