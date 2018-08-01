import { Component, OnInit, Inject } from '@angular/core';
import { UserService} from '../../services/user.service';
import { User } from '../../models/user';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  user: User

  constructor(
    private router: Router,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) private data: { response: User }
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  deleteAccountBtn() {
    this.userService.delete(this.data.response.id)
    .subscribe()
    this.router.navigate(['home']);
  }

}
