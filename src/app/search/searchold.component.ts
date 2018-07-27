// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatSort, MatTableDataSource, MatPaginator, MatDialog, PageEvent } from '@angular/material';
// import { PlayerService } from '../services/player.service';
// import { NewPlayerModelComponent } from './new-player-model/new-player-model.component';
// import { Observable } from 'rxjs';
// import { DataSource } from '@angular/cdk/collections';
// import { Player } from '../models/player';

// export interface Player {
//   playername: string;
//   position: string;
//   role: string;
//   technical: number;
//   mental: number;
//   physical: number;
// }

// // const PLAYER_DATA: Player[] = [
// //   {playername:'John Smith', position:'F',role:'Target',technical:17,mental:12,physical:13},
// //   {playername:'Jack Daniel', position:'F',role:'Advanced',technical:19,mental:15,physical:8},
// //   {playername:'James Doe', position:'F',role:'Pocher',technical:12,mental:7,physical:16},
// //   {playername:'Steve Price', position:'F',role:'Advanced',technical:10,mental:4,physical:19},
// //   {playername:'Aaron Dame', position:'F',role:'Target',technical:8,mental:12,physical:15},
// //   {playername:'Adam Demaree', position:'F',role:'Target',technical:14,mental:15,physical:18},
// //   {playername:'Sam Darnold', position:'F',role:'Pocher',technical:16,mental:19,physical:20},
// //   {playername:'John Smith', position:'F',role:'Target',technical:17,mental:12,physical:13},
// //   {playername:'Jack Daniel', position:'F',role:'Advanced',technical:19,mental:15,physical:8},
// //   {playername:'James Doe', position:'F',role:'Pocher',technical:12,mental:7,physical:16},
// //   {playername:'Steve Price', position:'F',role:'Advanced',technical:10,mental:4,physical:19}
// // ];

// @Component({
//   selector: 'app-search',
//   styleUrls: ['search.component.css'],
//   templateUrl: 'search.component.html',
// })

// export class SearchPlayerComponent implements OnInit {
//   dataSource = new PlayerDataSource(this.playerService);
//   displayedColumns: string[] = ['playername', 'position', 'role', 'technical','mental','physical'];

//   constructor(
//     private dialog: MatDialog,
//     private playerService: PlayerService
//   ){}

//   // applyFilter (filterValue: string){
//   //   this.dataSource.filter = filterValue.trim().toLowerCase();
//   // }

//   // @ViewChild(MatSort) sort: MatSort;
//   // @ViewChild(MatPaginator) paginator: MatPaginator; 

//   // pageEvent: PageEvent;

//   ngOnInit(){
//     // this.dataSource.sort = this.sort;
//     // this.dataSource.paginator = this.paginator;
//   }

//   openDialog(): void {
//     let dialogRef = this.dialog.open(NewPlayerModelComponent, {
//       height: '40em',
//       width: '40em'
//     });
//   }

// }

// export class PlayerDataSource extends DataSource<any> {
//   constructor(private playerService: PlayerService) {
//     super();
//   }
//   connect(): Observable<Player[]> {
//     return this.playerService.findPlayer();
//   }
//   disconnect() {}
// }