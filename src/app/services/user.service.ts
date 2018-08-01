import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { APIURL } from '../../environments/environment.prod';

const HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private userURL = `${APIURL}/user`;

    constructor(private http: HttpClient) { }

    user: User;

    updateProfile(user: User) {
        return this.http.put(`${this.userURL}/update/` + user.id, user, HttpOptions);
    }

    //getAll
    // getUser() {
    //     return this.http.get<User[]>(this.userURL, HttpOptions);
    // }

    getUserById(id: number){
        return this.http.get(this.userURL + id, HttpOptions);
    }

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