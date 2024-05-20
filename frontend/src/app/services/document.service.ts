import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doc } from 'src/app/interfaces/Doc';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private apiUrl = '';

  constructor(private http: HttpClient, private authService: AuthService) {
    this.apiUrl = environment.url + 'documento';
  }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  /**
   * funcion consulta todos los documentos
   */
  getDocument(): Observable<Doc[]> {
    const headers = this.getHeaders();
    return this.http.get<Doc[]>(this.apiUrl, { headers });
  }

  /**
   * funcion consulta documentos con parametros
   */
  getDocumentParams(object: any, url: string = ''): Observable<Doc[]> {
    const headers = this.getHeaders();
    let params = new HttpParams().set('doc_nombre', object.doc_nombre);

    if (url != '') return this.http.get<Doc[]>(url, { headers, params });

    // Realizar la solicitud GET con los parámetros
    return this.http.get<Doc[]>(this.apiUrl, { headers, params });
  }

  /**
   * funcion crea documento
   */
  createDocument(Data: Doc): Observable<Doc> {
    const headers = this.getHeaders();
    return this.http.post<Doc>(this.apiUrl, Data, { headers });
  }

  /**
   * funcion actualiza documento
   */
  updateDocument(id: number, Data: Doc): Observable<Doc> {
    const headers = this.getHeaders();
    return this.http.patch<Doc>(`${this.apiUrl}/${id}`, Data, { headers });
  }

  /**
   * funcion elimina documento
   */
  deleteDocument(cod_id: number): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.apiUrl}/${cod_id}`, { headers });
  }
}
