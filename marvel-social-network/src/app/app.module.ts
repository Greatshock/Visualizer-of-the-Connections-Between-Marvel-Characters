import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatCardModule, MatButtonModule, MatToolbarModule,
  MatListModule, MatInputModule, MatIconModule,
  MatAutocompleteModule, MatCheckboxModule, MatRadioModule,
  MatTooltipModule, MatSnackBarModule, MatTableModule, MatStepperModule, MatSelectModule
} from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {RouteReuseStrategy, RouterModule} from '@angular/router';
import { routes } from './router/routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StatsComponent } from './stats/stats.component';
import { NetworkGraphComponent } from './network-graph/network-graph.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HelpComponent } from './help/help.component';

import { AuthService, d3Service } from './shared/services';
import { D3Service } from 'd3-ng2-service';
import { D3_DIRECTIVES } from './shared/directives';
import { SHARED_VISUALS } from './shared/visuals';
import { AuthGuard } from './shared/guards';
import {CustomReuseStrategy} from "./router/custom-reuse-strategy";

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
    StatsComponent,
    NetworkGraphComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
    ...D3_DIRECTIVES,
    ...SHARED_VISUALS
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, FormsModule,
    RouterModule.forRoot(routes),
    MatCardModule, MatButtonModule, MatToolbarModule,
    MatListModule, MatInputModule, MatIconModule,
    MatAutocompleteModule, MatCheckboxModule, MatRadioModule,
    MatListModule, MatTooltipModule, MatSnackBarModule,
    MatTableModule, MatStepperModule, MatSelectModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ChartsModule
  ],
  providers: [
    AuthService, AuthGuard, D3Service, d3Service,
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
  bootstrap:  [
    AppComponent
  ]
})
export class AppModule { }
