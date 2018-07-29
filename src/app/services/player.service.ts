import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Player } from '../models/player';
import { Router } from '@angular/router';

const HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
    providedIn: 'root'
})

export class PlayerService {
    private playerURL = 'http://localhost:3000/player';

    constructor(private http: HttpClient, private router: Router) { }

    //getAll
    getPlayer(): Observable<any> {
        return this.http.get(this.playerURL, HttpOptions);
    }

    findPlayer(filter = '', sortOrder = "asc", pageNumber = 0, pageSize = 15): Observable<Player[]> {
            return this.http.get('http://localhost:3000/player', {
                params: new HttpParams()
                    .set('filter', filter)
                    .set('sortOrder', sortOrder)
                    .set('pageNumber', pageNumber.toString())
                    .set('pageSize', pageSize.toString())
            }).pipe(
                map(res => res["payload"])
            );
        }

    getPlayerById(id: number): Observable<Player> {
        return this.http.get<Player>(`${this.playerURL}/details/${id}`);
    }

    addPlayer(player: Player) {
        return this.http.post(`${this.playerURL}/create`, player);
    }

    updatePlayer(player: Player) {
        return this.http.put(this.playerURL + player.playername, player);
    }

    deletePlayer(playername: string) {
        return this.http.delete(this.playerURL + playername);
    }
}