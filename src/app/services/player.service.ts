import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Player } from '../models/player';
import { Router } from '@angular/router';
import { APIURL } from '../../environments/environment.prod';

const HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
    providedIn: 'root'
})

export class PlayerService {
    // private playerURL = 'http://localhost:3000/player';
    private playerURL = `${APIURL}/player`;

    constructor(private http: HttpClient, private router: Router) { }

    getAllPlayers(params = null) {
        let endpoint = `${this.playerURL}`
        
        return this.http.get(this.playerURL, params)
    }

    getPlayer(): Observable<Player[]>{
        return this.http.get<Player[]>(this.playerURL);
    }

    getPlayerById(playername: string) {
        return this.http.get(this.playerURL + playername, HttpOptions);
    }

    addPlayer(player: Player) {
        return this.http.post(`${this.playerURL}/create`, player);
    }

    updatePlayer(player: Player) {
        return this.http.put(this.playerURL + player.playername, player, HttpOptions);
    }

    deletePlayer(playername: string) {
        return this.http.delete(this.playerURL + playername, HttpOptions);
    }
}