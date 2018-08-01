import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { EditprofileComponent } from './editprofile/editprofile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  // providers: [ UserService ]
})

export class ProfileComponent implements OnInit {

  user: User[];

  constructor(
    private userService: UserService,
    private dialog: MatDialog
    // @Inject(DATA) private data: { response: User }
    // public data: { response: User }
    // @Inject(User) public data
  ) { }

  ngOnInit() {
    // console.log(this.data);
    // console.log(this.data.response);
    // this.editProfileForm = this.formBuilder.group({
    //   id: [this.data.response.id],
    //   username: [this.data.response.username],
    //   email: [this.data.response.email],
    //   password: [this.data.response.password]
    // });
    // console.log(this.userService.user);
  }

  // onSubmit() {
  //   this.userService.updateProfile(this.editProfileForm.value)
  //   .subscribe()
  // }

  openEditDialog(userId): void {
    this.userService.getUserById(userId).subscribe(response => {
      let dialogRef = this.dialog.open(EditprofileComponent, {
        height: '23em',
        width: '25em',
        data: {response}
      });
      console.log(response)
    })
    console.log(userId);
  }
}
