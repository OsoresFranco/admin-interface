import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegUser } from '../models/registeruser';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<RegUser[]>{
    return this.http.get<RegUser[]>(`api/Users?userOperation=1`)
  }
}
