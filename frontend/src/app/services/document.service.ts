import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doc } from 'src/app/interfaces/Doc';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private apiUrl = '';

  constructor(private http: HttpClient) {
    this.apiUrl = environment.url + 'documento';
  }

   /**
   * funcion consulta todos los documentos
   */
  getDocument(): Observable<Doc[]> {
    return this.http.get<Doc[]>(this.apiUrl);
  }

  /**
   * funcion consulta documentos con parametros
   */
  getDocumentParams(object: any, url: string = ''): Observable<Doc[]> {
    let params = new HttpParams().set('doc_nombre', object.doc_nombre);

    if (url != '') return this.http.get<Doc[]>(url, { params: params });

    // Realizar la solicitud GET con los parámetros
    return this.http.get<Doc[]>(this.apiUrl, { params: params });
  }

  /**
   * funcion crea documento
   */
  createDocument(Data: Doc): Observable<Doc> {
    return this.http.post<Doc>(this.apiUrl, Data);
  }

  /**
   * funcion actualiza documento
   */
  updateDocument(id: number, Data: Doc): Observable<Doc> {
    return this.http.patch<Doc>(`${this.apiUrl}/${id}`, Data);
  }

  /**
   * funcion elimina documento
   */
  deleteDocument(cod_id: number): Observable<void> {
    console.log(cod_id);
    return this.http.delete<void>(`${this.apiUrl}/${cod_id}`);
  }
}
