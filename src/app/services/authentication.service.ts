import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { APIURL } from '../../environments/environment.prod';
import { UserService } from './user.service';

// const baseURL: string = "http://localhost:3000";
const userURL: string = `${APIURL}/user`;

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(
      private http: HttpClient,
      private router: Router,
      public userService: UserService
    ) { }

  register(signupInfo) {
      return this.http.post<any>(`${userURL}/create`, signupInfo)
  }

  login(loginInfo) {
    return this.http.post<any>(`${userURL}/login`, loginInfo)
    .subscribe((res) => {
        console.log(res)
        this.userService.user = res.user;
        localStorage.setItem("token", res.sessionToken)
        console.log(this.userService.user)
        // localStorage.setItem("userid", res.user.body.id)
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

//   updateUser() {
//       return this.http.put(`${userURL}/update/${localStorage}.id`)
//   }

}