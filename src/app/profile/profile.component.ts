import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { MatDialogRef } from '@angular/material';

// export interface User {
//   username: "Test";
//   email: string;
//   password: string;
// }

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  

  constructor(
    // private auth: AuthenticationService,
    // private dialogRef: MatDialogRef<ProfileComponent>
  ) { }

  

  ngOnInit() {
    // this.getUserInfo();
  }
  
  // onSubmit() {

  // }

}
