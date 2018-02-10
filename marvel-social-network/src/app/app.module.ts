import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatCardModule, MatButtonModule, MatToolbarModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { D3Service, D3_DIRECTIVES } from './network-graph/d3';
import { GraphComponent } from './network-graph/visuals/graph/graph.component';
import { SHARED_VISUALS } from './network-graph/visuals/shared';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NetworkGraphComponent } from './network-graph/network-graph.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthService } from './shared/services/auth.service';
import { DatabaseService } from './shared/services/database.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HelpComponent } from './help/help.component';

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
    AboutComponent,
    NetworkGraphComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatCardModule, MatButtonModule, MatToolbarModule, MatListModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    D3Service, AuthService, AuthGuard, DatabaseService
  ],
  bootstrap:  [
    AppComponent
  ]
})
export class AppModule { }