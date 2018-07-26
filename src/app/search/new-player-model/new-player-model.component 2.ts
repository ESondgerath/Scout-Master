import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldControl} from '@angular/material';
import { NgForm } from '@angular/forms';
// import {ngModel} from '@angular/forms'
@Component({
  selector: 'app-new-player-model',
  templateUrl: './new-player-model.component.html',
  styleUrls: ['./new-player-model.component.css']
})
export class NewPlayerModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
