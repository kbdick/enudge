import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;
import { FirestoreService } from './core/firestore.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './404/page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule } from './material/material.module';
import { UiModule } from './ui/ui.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MaterialModule,
    UiModule,
    NgbModule.forRoot()
  ],
  providers: [ FirestoreService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }