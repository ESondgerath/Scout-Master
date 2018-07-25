import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { 
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule, 
  MatSnackBarModule,
  MatFormField,
  } from "@angular/material";
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { SearchPlayerComponent } from './search/search.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkTableModule } from '@angular/cdk/table';
import { RouterModule, Routes, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { PlayerService } from './services/player.service';
import { AppRoutingModule } from './app-routing.module'
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
 declarations: [
    AppComponent,
    AppComponent,
    HomeComponent,
    SearchPlayerComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    CdkTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [UserService, PlayerService],
  exports: [RouterModule],
  bootstrap: [ AppComponent ]
})
export class AppModule { }