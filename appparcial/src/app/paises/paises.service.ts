import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paises } from './paises';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  @Injectable({
    providedIn: 'root'
  })
 
  private apiUrl = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  getPaises(): Observable<Paises[]>{
    return this.http.get<Paises[]>(this.apiUrl);
  }
}
