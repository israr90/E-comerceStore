import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from './pages/public/login/login.component';
import { NotFoundComponent } from './pages/public/not-found/not-found.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FileUploadService } from './services/file-upload.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ExcelService } from './services/excel.service';
import { OrderByPipe } from './order-by.pipe';
//import { AngularFireStorageModule } from 'angularfire2/storage';

//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//import { AngularFireStorageModule } from '@angular/fire/compat/storage';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    OrderByPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    // AngularFireDatabaseModule,
    // AngularFireStorageModule,
    
    FormsModule,
    
    
    // ,{provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  providers: [FileUploadService,ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
