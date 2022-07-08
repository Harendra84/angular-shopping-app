import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingdataService {

  constructor(private htpp: HttpClient) { }

  GetUsers():Observable<any[]>{
    return this.htpp.get<any[]>('http://127.0.0.1:8080/getusers');
  }

  RegisterUser(data:any):Observable<any>{
    return this.htpp.post<any>('http://127.0.0.1:8080/registeruser',data);
  }

}
