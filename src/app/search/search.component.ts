import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, PageEvent } from '@angular/material';
import { PlayerService } from '../services/player.service';
import { NewPlayerModelComponent } from './new-player-model/new-player-model.component';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Player } from '../models/player';
import { DatasourceService } from '../services/datasource.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-search',
  styleUrls: ['search.component.css'],
  templateUrl: 'search.component.html',
})

export class SearchPlayerComponent implements AfterViewInit, OnInit {

  player: Player;
  dataSource: DatasourceService;
  displayedColumns: string[] = ['playername', 'position', 'role', 'technical','mental','physical'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.player = this.route.snapshot.data["player"]
    this.dataSource = new DatasourceService(this.playerService);
    this.dataSource.loadPlayer(this.player.id, '', 'asc', 0, 15);
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadPlayerPage())
      )
      .subscribe();
  }

  loadPlayerPage() {
    this.dataSource.loadPlayer(
      this.player.id,
      '',
      'asc',
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }

}