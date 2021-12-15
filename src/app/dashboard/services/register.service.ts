import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegUser } from '../models/registeruser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { 

  }

  save(user:RegUser): Observable<RegUser> {
    console.log("Save");
    return this.http.post<RegUser>('http://localhost:3000/api/Alta/', user);
  }

}
