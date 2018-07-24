import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  } from "@angular/material";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { SearchPlayerComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchPlayerComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
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
    BrowserAnimationsModule,
    CdkTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
