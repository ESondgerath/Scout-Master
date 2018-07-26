import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource, } from '@angular/material';
import {PageEvent} from '@angular/material';

export interface Player {
  playername: string;
  position: string;
  role: string;
  technical: number;
  mental: number;
  physical: number;
}

const PLAYER_DATA: Player[] = [
  {playername:'John Smith', position:'F',role:'Target',technical:17,mental:12,physical:13},
  {playername:'Jack Daniel', position:'F',role:'Advanced',technical:19,mental:15,physical:8},
  {playername:'James Doe', position:'F',role:'Pocher',technical:12,mental:7,physical:16},
  {playername:'Steve Price', position:'F',role:'Advanced',technical:10,mental:4,physical:19},
  {playername:'Aaron Dame', position:'F',role:'Target',technical:8,mental:12,physical:15},
  {playername:'Adam Demaree', position:'F',role:'Target',technical:14,mental:15,physical:18},
  {playername:'Sam Darnold', position:'F',role:'Pocher',technical:16,mental:19,physical:20},
  {playername:'John Smith', position:'F',role:'Target',technical:17,mental:12,physical:13},
  {playername:'Jack Daniel', position:'F',role:'Advanced',technical:19,mental:15,physical:8},
  {playername:'James Doe', position:'F',role:'Pocher',technical:12,mental:7,physical:16},
  {playername:'Steve Price', position:'F',role:'Advanced',technical:10,mental:4,physical:19},
  {playername:'Aaron Dame', position:'F',role:'Target',technical:8,mental:12,physical:15},
  {playername:'Adam Demaree', position:'F',role:'Target',technical:14,mental:15,physical:18},
  {playername:'Sam Darnold', position:'F',role:'Pocher',technical:16,mental:19,physical:20},
];

@Component({
  selector: 'app-search',
  styleUrls: ['search.component.css'],
  templateUrl: 'search.component.html',
})
export class SearchPlayerComponent implements OnInit {
  displayedColumns: string[] = ['playername', 'position', 'role', 'technical','mental','physical'];
  dataSource = new MatTableDataSource(PLAYER_DATA);

  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(){
    this.dataSource.sort = this.sort;
  }

  length = 200;
  pageSize = 15;
  pageSizeOptions: number[] = [15, 50, 100];

  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string){
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}



/**
 * @title Basic use of `<table mat-table>`
 */

