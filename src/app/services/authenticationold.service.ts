// import { Injectable } from '@angular/core';
// import { HttpHeaders, HttpClient } from '@angular/common/http';

// import { Router } from '@angular/router';

// import { User } from "../models/user"
// import { Token } from "../models/Token"

// import { Subject } from "rxjs"

// const httpOptions = {
//     headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//     })
// };

// const baseURL: string = "http://localhost:3000";

// @Injectable({
//   providedIn: 'root'
// })

// export class AuthenticationService {
//     userInfo = new Subject<{}>();

//     constructor(private http: HttpClient, private router: Router){  }

//     register(userData: User){
//         return this.http.post(`${baseURL}/user/create`, userData, httpOptions)     
//     }

//     login(loginInfo) {
//         return this.http.post(`${baseURL}/user/login`, loginInfo)
//         .subscribe((token: Token) => {
//             localStorage.setItem("token", token.sessionToken);

//             this.userInfo.next({
//                 isLoggedin: true
//             });
//             this.router.navigate(["/search"])
//         })
//     }

//     logout(){
//         localStorage.clear();
//         this.userInfo.next(false);
//         this.router.navigate(["/home"])
//     }
// }