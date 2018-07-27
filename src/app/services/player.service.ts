import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player';

const HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
    providedIn: 'root'
})

export class PlayerService {
    private playerURL = 'http://localhost:3000/player/';

    constructor(private http: HttpClient) { }

    //getAll
    // getPlayer() {
    //     return this.http.get<Player[]>(this.playerURL, HttpOptions);
    // }
    getPlayer(): Observable<Player[]>{
        return this.http.get<Player[]>(this.playerURL);
    }

    getPlayerById(playername: string) {
        return this.http.get(this.playerURL + playername, HttpOptions);
    }

    addPlayer(player: Player) {
        return this.http.post(`${this.playerURL}create`, player, HttpOptions);
    }

    updatePlayer(player: Player) {
        return this.http.put(this.playerURL + player.playername, player, HttpOptions);
    }

    deletePlayer(playername: string) {
        return this.http.delete(this.playerURL + playername, HttpOptions);
    }
}