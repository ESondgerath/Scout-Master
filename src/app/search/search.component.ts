import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, PageEvent } from '@angular/material';
import { PlayerService } from '../services/player.service';
import { NewPlayerModelComponent } from './new-player-model/new-player-model.component';
import { Observable, fromEvent, merge } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Player } from '../models/player';
// import { DatasourceService } from '../services/datasource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  styleUrls: ['search.component.css'],
  templateUrl: 'search.component.html',
})

export class SearchPlayerComponent implements OnInit {
  
  dataSource = new PlayerDataSource(this.playerService);
  // dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['playername','position', 'role', 'technical','mental','physical',];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild('input') input: ElementRef;

  constructor(
    private playerService: PlayerService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    // this.playerService.getAllPlayers().subscribe((res) => {
    //   this.dataSource = res.data;
    //   console.log(res)
    // });
  }

  // show(player) {
  //   this.router.navigate(['players/', player.player_id]);
  //   console.log(player);
  // }

  openDialog(): void {
    let dialogRef = this.dialog.open(NewPlayerModelComponent, {
      height: '23em',
      width: '25em'
    });
  }
}

export class PlayerDataSource extends DataSource<any> {
  constructor(private playerService: PlayerService) {
    super();
  }
  connect(): Observable<Player[]> {
    return this.playerService.getPlayer();
  }
  disconnect() {}
}
