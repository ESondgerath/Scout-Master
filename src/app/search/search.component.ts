import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, PageEvent } from '@angular/material';
import { PlayerService } from '../services/player.service';
import { NewPlayerModelComponent } from './new-player-model/new-player-model.component';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Player } from '../models/player';


// export interface Player {
//   playername: string;
//   position: string;
//   role: string;
//   technical: number;
//   mental: number;
//   physical: number;
// }

const PLAYER_DATA: Player[] = [];

@Component({
  selector: 'app-search',
  styleUrls: ['search.component.css'],
  templateUrl: 'search.component.html',
})

export class SearchPlayerComponent implements OnInit {
  
  dataSource = new PlayerDataSource(this.playerService);
  displayedColumns: string[] = ['playername','position', 'role', 'technical','mental','physical',];

  constructor(
    private playerService: PlayerService,
    private dialog: MatDialog){}

  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  pageEvent: PageEvent;

  ngOnInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(NewPlayerModelComponent, {
      height: '23em',
      width: '25em'
    });
  }}

export class PlayerDataSource extends DataSource<any> {
  filter: string;
  paginator: MatPaginator;
  sort: MatSort;
  constructor(private userService: PlayerService) {
    super();
  }
  connect(): Observable<Player[]> {
    return this.userService.getPlayer();
  }
  disconnect() {}
}

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log("it works");
    // });
  
  
  // length = 200;
  // pageSize = 15;
  // pageSizeOptions: number[] = [15, 50, 100];

//   pageEvent: PageEvent;

//   setPageSizeOptions(setPageSizeOptionsInput: string){
//     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
//   }
// }



/**
 * @title Basic use of `<table mat-table>`
 */

