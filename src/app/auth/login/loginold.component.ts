// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { first } from 'rxjs/operators';
// // import { AlertService } from '../../services/alert.service';
// import { AuthenticationService } from '../../services/authentication.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// export class LoginComponent implements OnInit {

//   loginForm: FormGroup;
//   loading = false;
//   submitted = false;
//   returnURL: string;
//   users: Object[] = [];

//   constructor(
//     public formBuilder: FormBuilder,
//     public route: ActivatedRoute,
//     public router: Router,
//     public auth: AuthenticationService) {}

//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });

//     // this.auth.logout();

//     // this.returnURL = this.route.snapshot.queryParams['returnURL'] || '/';
//   }
    
//   get f() {return this.loginForm.controls;}

//   onSubmit() {
//     this.submitted = true;

//     if (this.loginForm.invalid) {
//       return;
//     }

//     this.loading = true;

//     // var newUser = { user: {
//     //   username: this.username,
//     //   password: this.password
//     // }}

//     // this.auth.login(newUser)

//     this.auth.login(this.f.username.value, this.f.password.value)
//     // .pipe(first())
//     // .subscribe(
//     //   data => {
//     //     this.router.navigate([this.returnURL]);
//     //   }
//     //   // error => {
//     //   //   this.alertService.error(error);
//     //   //   this.loading = false;
//     //   // }
//     // );

//   }

//   get username() {
//     return this.loginForm.get('username')
//   }
//   get password() {
//     return this.loginForm.get('password')
//   }
// }