import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../modelos/articulo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "http://localhost:3000/cuentas/";

  constructor(private http:HttpClient) { }

  public getArticulos():Observable<Articulo[]>{    
    return this.http.get<Articulo[]>(this.apiUrl);
  }
}
