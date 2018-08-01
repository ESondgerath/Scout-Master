import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { APIURL } from '../../environments/environment.prod';
import { HttpClientModule } from '@angular/common/http';

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
    getAllUsers(params = null) {
        return this.http.get(this.userURL, params);
    }

    getUser(): Observable<User[]>{
        return this.http.get<User[]>(this.userURL);
    }

    getUserById(id: number){
        return this.http.get(this.userURL + id, HttpOptions);
    }

    // createUser(user: User) {
    //     return this.http.post(`${this.userURL}create`, user, HttpOptions);
    // }

    delete(id: number) {
        return this.http.delete(`${this.userURL}/deleteuser/` + id, HttpOptions);
    }
}