import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatCardModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';

import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { AboutComponent } from './about/about.component';

const firebaseConfig = {
  apiKey: 'AIzaSyD0gFkxcO2tzKxD8Ao6fXtuhgeglD7z3f4',
  authDomain: 'marvel-3d-network.firebaseapp.com',
  databaseURL: 'https://marvel-3d-network.firebaseio.com',
  projectId: 'marvel-3d-network',
  storageBucket: 'marvel-3d-network.appspot.com',
  messagingSenderId: '451920496171'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SocialNetworkComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatCardModule, MatButtonModule, MatToolbarModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
