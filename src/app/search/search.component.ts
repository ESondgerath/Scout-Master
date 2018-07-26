import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-search',
  styleUrls: ['search.component.css'],
  templateUrl: 'search.component.html',
})
export class SearchPlayerComponent implements OnInit {
  displayedColumns: string[] = ['name', 'position', 'role', 'technical','mental','physical'];
  dataSource = new MatTableDataSource(PLAYER_DATA);

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
}

  export interface Player {
    name: string;
    position: string;
    role: string;
    technical: number;
    mental: number;
    physical: number;
  }
  
  const PLAYER_DATA: Player[] = [
    {name:'John Smith', position:'F',role:'Target',technical:17,mental:12,physical:13},
    {name:'Jack Daniel', position:'F',role:'Advanced',technical:19,mental:15,physical:8},
    {name:'James Doe', position:'F',role:'Pocher',technical:12,mental:7,physical:16},
    {name:'Steve Price', position:'F',role:'Advanced',technical:10,mental:4,physical:19},
    {name:'Aaron Dame', position:'F',role:'Target',technical:8,mental:12,physical:15},
    {name:'Adam Demaree', position:'F',role:'Target',technical:14,mental:15,physical:18},
    {name:'Sam Darnold', position:'F',role:'Pocher',technical:16,mental:19,physical:20},
    {name:'John Smith', position:'F',role:'Target',technical:17,mental:12,physical:13},
    {name:'Jack Daniel', position:'F',role:'Advanced',technical:19,mental:15,physical:8},
    {name:'James Doe', position:'F',role:'Pocher',technical:12,mental:7,physical:16},
    {name:'Steve Price', position:'F',role:'Advanced',technical:10,mental:4,physical:19},
    {name:'Aaron Dame', position:'F',role:'Target',technical:8,mental:12,physical:15},
    {name:'Adam Demaree', position:'F',role:'Target',technical:14,mental:15,physical:18},
    {name:'Sam Darnold', position:'F',role:'Pocher',technical:16,mental:19,physical:20},
  ];

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

