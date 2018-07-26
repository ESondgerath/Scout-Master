import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const baseURL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(
      private http: HttpClient,
      private router: Router
    ) { }

  register(signupInfo) {
      return this.http.post<any>(`${baseURL}/user/create`, signupInfo)
  }

  login(loginInfo) {
    return this.http.post<any>(`${baseURL}/user/login`, loginInfo)
    .subscribe((res) => {
        localStorage.setItem("token", res.sessionToken)
        this.router.navigate(["/home"])
    },
        err => console.log(err)
    );
  }

  logoutUser() {
      localStorage.removeItem('token')
    //   this.router.navigate(['/home'])
  }

  getToken() {
      return localStorage.getItem('token')
  }

  loggedIn() {
      return !!localStorage.getItem('token')
  }

}