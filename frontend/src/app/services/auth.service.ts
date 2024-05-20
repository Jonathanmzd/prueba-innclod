import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "";

  constructor(private http: HttpClient) {
    this.apiUrl = environment.url  + "login";
  }

  /**
   * login
   * @param data
   * @returns
   */
  login(data: any){
    return this.http.post<any>(this.apiUrl, data)
  }

  /**
   * validar si el usuario tiene un token guardado en localStore
   * @returns
   */
  getToken(){
    let token = localStorage.getItem('token');
    if(token !== undefined){
      return token
    }
    return null;
  }

  /**
   * eliminar el token, nombre_user, id_user de localStore
   */
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('nombre_user');
    localStorage.removeItem('id_user');
  }

}
