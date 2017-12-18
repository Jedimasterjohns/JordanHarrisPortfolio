import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes, } from '@angular/router';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';

import { GlobalServiceManager } from './_services/global-service-manager.service';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavigationComponent,
    ResumeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    SimpleSmoothScrollModule,
    routing
  ],
  providers: [
    GlobalServiceManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
