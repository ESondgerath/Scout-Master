import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ObserversModule } from '../../../node_modules/@angular/cdk/observers';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router, public auth: AuthenticationService) { }

  // canActivate() {
  //   if (localStorage.getItem('token')) {
  //     return true;
  //   }
  //   this.router.navigate(['login]']);
  //   return false
  // }

  canActivate() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['login'])
      return false;
    }
    return true;
  }
}