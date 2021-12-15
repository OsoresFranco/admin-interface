import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string): Observable<User> {
    return this.http.get<User>(`/api/Login?email=${username}&password=${password}`)
  } 
  
}