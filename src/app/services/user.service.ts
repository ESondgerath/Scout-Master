import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private userURL = 'http://localhost:3000/user/';

    constructor() { }

    user: User;

    //getAll
    // getUser() {
    //     return this.http.get<User[]>(this.userURL, HttpOptions);
    // }

    // getUserById(id: number) {
    //     return this.http.get(this.userURL + id, HttpOptions);
    // }

    // createUser(user: User) {
    //     return this.http.post(`${this.userURL}create`, user, HttpOptions);
    // }

    // update(user: User) {
    //     return this.http.put(this.userURL + user.id, user, HttpOptions);
    // }

    // delete(id: number) {
    //     return this.http.delete(this.userURL + id, HttpOptions);
    // }
}