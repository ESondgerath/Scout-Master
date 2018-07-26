import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    private loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthenticationService
    ) {
        this.createForm();
    }

    ngOnInit() {

    }

    createForm(): void {
        this.loginForm = this.formBuilder.group({
            username: new FormControl,
            password: new FormControl
        })
    }
    onSubmit() {
        this.auth.login(this.loginForm.value)
    }
}
