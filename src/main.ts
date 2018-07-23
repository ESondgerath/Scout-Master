import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
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
  MatSnackBarModule,} from "@angular/material";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
