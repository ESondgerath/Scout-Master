import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {

  editProfileForm: FormGroup;
  user: User

  constructor(
    public userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
    //@Inject(UserService) private data: { response: User }
    // public data: User
    // @Inject(User) public data
  ) { }

  ngOnInit() {
    //console.log(this.data);
    //console.log(this.data.response);
    this.editProfileForm = this.formBuilder.group({
      id: [this.userService.user.id],
      username: [this.userService.user.username],
      email: [this.userService.user.email],
      password: [this.userService.user.password]
    });
    console.log(this.userService.user);
  }

  // deleteAccountBtn(userId): void {
  //   this.userService.getUserById(userId).subscribe(response => {
  //     let dialogRef = this.dialog.open(DeleteComponent, {
  //       height: '23em',
  //       width: '25em',
  //       data: {response}
  //     });
  //     console.log(response)
  //   })
  //   console.log(userId)
  // }

  deleteAccountBtn(userId): void {
    console.log(userId);
    this.userService.getUserById(userId).subscribe()
  }
  
  onSubmit() {
    this.userService.updateProfile(this.editProfileForm.value)
    .subscribe()
    // window.location.reload();
    this.router.navigate(['home']);
  }
}