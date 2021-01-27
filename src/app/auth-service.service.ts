import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  //servicios de Http para consumir API
  
  constructor(private http:HttpClient) { }
  login(datos):Observable<any>{
    return this.http.post<any>("/api/membership/login", datos);
  }


  //Metodo para mostrar paquete segun user
  mostrar(username):Observable<any>{
    return this.http.get<any>("/api/packages/getPending?username=%7B'"+username);
  }
 



}
