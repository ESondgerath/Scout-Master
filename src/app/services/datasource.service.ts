import { Injectable } from '@angular/core';
import { CollectionViewer, DataSource } from '@angular/cdk/collections'
import { PlayerService } from './player.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})

export class DatasourceService implements DataSource<Player> {

  private playerSource = new BehaviorSubject<Player[]>([]);
  private loadingPlayer = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingPlayer.asObservable();

  constructor(private playerService: PlayerService) { }
  
  loadPlayer(
    id: number,
    filter = '',
    sortDirection = 'asc',
    pageIndex = 0,
    pageSize = 15) {
      this.loadingPlayer.next(true);
      this.playerService.findPlayer(id, filter, sortDirection, pageIndex, pageSize).pipe(
        catchError(() => of([])),
        finalize(() => this.loadingPlayer.next(false))
      )
      .subscribe(player => this.playerSource.next(player))
    }

  connect(collectionViewer: CollectionViewer): Observable<Player[]> {
    return this.playerSource.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.playerSource.complete();
    this.loadingPlayer.complete();
  }
}
