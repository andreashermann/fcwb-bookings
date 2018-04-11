import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "angularfire2";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "angularfire2/auth";
import { OverviewComponent } from './overview/overview.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: '', component: OverviewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
