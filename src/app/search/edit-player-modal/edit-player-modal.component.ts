import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-player-modal',
  templateUrl: './edit-player-modal.component.html',
  styleUrls: ['./edit-player-modal.component.css']
})
export class EditPlayerModalComponent implements OnInit {

  editPlayerForm: FormGroup;
  player: Player

  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private router: Router,
    private dialogRef: MatDialogRef<any>,

    @Inject(MAT_DIALOG_DATA) private data: { response: Player }
  ) { }

  ngOnInit() {
    console.log(this.data);
    console.log(this.data.response);
    this.editPlayerForm = this.formBuilder.group({
      id: [this.data.response.id],
      playername: [this.data.response.playername],
      position: [this.data.response.position],
      role: [this.data.response.role],
      technical: [this.data.response.technical],
      mental: [this.data.response.mental],
      physical: [this.data.response.physical]
    });
    // this.playerService.getPlayerById(playerId)
    // .subscribe(
    //   data=> {
    //     this.editPlayerForm.setValue(data);
    //   }
    // )
  }

  editPlayerBtn(){
  //  this.submitted= true;
   this.playerService.updatePlayer(this.editPlayerForm.value)
   .subscribe(
    //  data=> {
    //  this.router.navigate(['/players'])
    //  }
    ) 
    window.location.reload();
  }

  closeModal() {
    this.dialogRef.close()
  }
}
