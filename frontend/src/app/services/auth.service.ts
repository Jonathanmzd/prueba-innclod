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

  login(data: any){
    return this.http.post<any>(this.apiUrl, data)
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token !== undefined){
      return token
    }
    return null;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('nombre_user');
    localStorage.removeItem('id_user');
  }

}
