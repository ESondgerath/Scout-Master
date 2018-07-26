import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ObserversModule } from '../../../node_modules/@angular/cdk/observers';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/home']);
      return false
    } else {
      return true
    }
  };
}
