import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import 'hammerjs';
import 'ionicons';
import { HomeComponent } from './home/home.component';
import { SearchPlayerComponent } from './search/search.component';
import { SearchNavbarComponent } from './search/search-navbar/search-navbar.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomeNavbarComponent } from './home/home-navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkTableModule } from '@angular/cdk/table';
import { UserService } from './services/user.service';
import { PlayerService } from './services/player.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AuthNavbarComponent } from './auth/auth-navbar.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
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
  MatSortModule,
  MatProgressSpinnerModule,
  } from "@angular/material";
import { ProfileComponent } from './profile/profile.component';
import { ProfileNavbarComponent } from './profile/profile-navbar.component';
import { TeamComponent } from './team/team.component';
import { TeamNavbarComponent } from './team/team-navbar.component';
import { NewPlayerModelComponent } from './search/new-player-model/new-player-model.component';
import { AuthGuard } from './guard/auth.guard';
import { AlertsComponent } from './alerts/alerts.component';
import { EditPlayerModalComponent } from './search/edit-player-modal/edit-player-modal.component';
import { DeleteComponent } from './profile/delete/delete.component';

@NgModule({
 declarations: [
    AppComponent,
    AppComponent,
    HomeComponent,
    SearchPlayerComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    TeamComponent,
    AlertsComponent,
    HomeNavbarComponent,
    ProfileNavbarComponent,
    AuthNavbarComponent,
    SearchNavbarComponent,
    TeamNavbarComponent,
    NewPlayerModelComponent,
    EditPlayerModalComponent,
    DeleteComponent,
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
    MatSortModule,
    MatProgressSpinnerModule,
  ],
  entryComponents:[
    NewPlayerModelComponent,
    EditPlayerModalComponent,
  ],
  providers: [UserService, PlayerService, AuthGuard],
  bootstrap: [ AppComponent ]
})

export class AppModule { }