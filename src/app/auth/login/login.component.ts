import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';
import { flattenStyles } from '../../../../node_modules/@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    
    constructor(
        private auth: AuthenticationService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private alertService: AlertService
    ) {
        this.createForm();
    }
    
    ngOnInit(){

    }

    createForm(): void {
        this.loginForm = this.formBuilder.group({
            username: new FormControl,
            password: new FormControl
        })
    }
    onSubmit() {
      this.auth.login(this.loginForm.value)
      console.log(this.loginForm.value)
  }
}

    //   const formValue = this.loginForm.value;
    //   try{
    //     await this.backend.collection('').add(formValue);
    //     this.success = true;
    //   }catch(err){
    //     console.log(err)
    //   }
    //   this.loading = false;
    // }
  
