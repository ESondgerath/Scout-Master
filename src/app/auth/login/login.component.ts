import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  //Form State
  loading = false;
  success = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
    }
    get username() {
      return this.loginForm.get('username')
    }
    get password() {
      return this.loginForm.get('password')
    }
    // async submitHandler(){
    //   this.loading = true;

    //   const formValue = this.employerForm.value;
    //   try{
    //     await this.backend.collection('').add(formValue);
    //     this.success = true;
    //   }catch(err){
    //     console.log(err)
    //   }
    //   this.loading = false;
    // }
  }
