// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { User } from '../models/user'
// import { map } from 'rxjs/operators';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }

// @Injectable({
//   providedIn: 'root'
// })

// export class UserService {
//   private userURL = 'http://localhost:3000/user';
//   constructor(private http: HttpClient) { }

//   //Get All
//   getUser() {
//     return this.http.get(this.userURL);
//   }

//   //Get By ID
//   getUserById(id: number) {
//     const url = `${this.userURL}/${id}`;
//     return this.http.get(url)
//   }

//   addUser(user: User) {
//     return this.http.post(this.userURL, user, httpOptions)
//   }

//   // addUser(User) {
//   //   return this.http.post("http://localhost:3000/user/create",(User), {headers: headers});
//   // }

//   deleteUser (user: User | number) {
//     const id = typeof user === 'number' ? user : user.id;
//     const url = `${this.userURL}/${id}`;

//     return this.http.delete(url, httpOptions)
//   }

//   // delete(userid) {
//   //   return this.http.delete(`http://localhost:3000/user/${userid}`);
//   // }

//   updateUser (user: User) {
//     return this.http.put(this.userURL, user, httpOptions)
//   }
// }
