import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/player'
import { catchError, map, tap } from 'rxjs/operators';
// import { MessageService } from './message.service';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playerURL = 'http://localhost:3000/player';

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  //Get All
  getPlayer(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playerURL)
  }

  //Get By ID
  getPlayerById(id: number): Observable<Player> {
    const url = `${this.playerURL}/${id}`;
    return this.http.get<Player>(url)
  }

  searchPlayers(term: string): Observable<Player[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Player[]>(`${this.playerURL}/?name=${term}`)
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.playerURL, player, httpOptions)
  }

  // addPlayer(Player) {
  //   return this.http.post("http://localhost:3000/player/create",(Player), {headers: headers});
  // }

  deletePlayer (player: Player | number): Observable<Player> {
    const id = typeof player === 'number' ? player : player.id;
    const url = `${this.playerURL}/${id}`;

    return this.http.delete<Player>(url, httpOptions)
  }

  // delete(playerid) {
  //   return this.http.delete(`http://localhost:3000/player/${playerid}`);
  // }

  updatePlayer (player: Player): Observable<any> {
    return this.http.put(this.playerURL, player, httpOptions)
  }
}