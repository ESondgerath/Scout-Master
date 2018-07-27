import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, PageEvent } from '@angular/material';
import { PlayerService } from '../services/player.service';
import { NewPlayerModelComponent } from './new-player-model/new-player-model.component';
import { Observable, fromEvent, merge } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Player } from '../models/player';
import { DatasourceService } from '../services/datasource.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  styleUrls: ['search.component.css'],
  templateUrl: 'search.component.html',
})

export class SearchPlayerComponent implements OnInit, AfterViewInit {

  player: Player;
  dataSource: DatasourceService;
  displayedColumns: string[] = ['playername', 'position', 'role', 'technical','mental','physical'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.player = this.route.snapshot.data["player"]
    this.dataSource = new DatasourceService(this.playerService);
    this.dataSource.loadPlayer('', 'asc', 0, 15);
  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.loadPlayerPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      tap(() => this.loadPlayerPage())
    )
    .subscribe();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(NewPlayerModelComponent, {
      height: '23em',
      width: '25em'
    });
  }

  loadPlayerPage() {
    this.dataSource.loadPlayer(
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }

}