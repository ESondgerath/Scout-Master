import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ UserService ]
})

export class ProfileComponent implements OnInit {

  editProfileForm: FormGroup;
  // user: User

  constructor(
    public userService: UserService,
    private formBuilder: FormBuilder,
    // @Inject(User) public data: { response: User }
    // public data: { response: User }
    // @Inject(User) public data
  ) { }

  ngOnInit() {
    console.log(this.data);
    console.log(this.data.response);
    this.editProfileForm = this.formBuilder.group({
      id: [this.data.response.id],
      username: [this.data.response.username],
      email: [this.data.response.email],
      password: [this.data.response.password]
    });
    console.log(this.userService.user);
  }
  
  onSubmit() {
    this.userService.updateProfile(this.editProfileForm.value)
    .subscribe()
  }

}
