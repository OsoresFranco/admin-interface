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
    return this.http.post<RegUser>('/api/Users', user);
  }

}
