import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public nombreUsuario = localStorage.getItem('nombre_user');

  constructor(private auth: AuthService,
    private router: Router){

  }

  logout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
