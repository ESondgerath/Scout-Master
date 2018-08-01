import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldControl} from '@angular/material';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-player-model',
  templateUrl: './new-player-model.component.html',
  styleUrls: ['./new-player-model.component.css']
})

export class NewPlayerModelComponent implements OnInit {

  newPlayerForm: FormGroup;
  // submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private router: Router,
    private dialogRef: MatDialogRef<any>,
  ) { }

  ngOnInit() {
    this.newPlayerForm = this.formBuilder.group({
      playername: [''],
      position: [''],
      role: [''],
      technical: [''],
      mental: [''],
      physical: ['']
    })
  }

  addPlayerToTable(){
  //  this.submitted= true;
   this.playerService.addPlayer(this.newPlayerForm.value)
   .subscribe(
     data=> {
     this.router.navigate(['/players'])
     }
    )
    window.location.reload();
  }

  closeModal() {
    this.dialogRef.close()
  }

}
