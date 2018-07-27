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
export class SearchPlayerComponent implements OnInit {
  displayedColumns: string[] = ['playername','position', 'role', 'technical','mental','physical',];
  dataSource = new MatTableDataSource(PLAYER_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private playerService: PlayerService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

  }
  openDialog(): void {
    let dialogRef = this.dialog.open(NewPlayerModelComponent, {
      height: '23em',
      width: '25em'
    });
  }

}