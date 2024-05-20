import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  private apiUrl = "";

  constructor(private http: HttpClient) {
    this.apiUrl = environment.url  + "tipo";
  }

  /**
   * funcion consulta tipo de docuento
   */
  getTipoDocumento(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
