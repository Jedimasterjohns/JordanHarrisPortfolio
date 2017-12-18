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

import { ScrollToModule } from 'ng2-scroll-to';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ScrollToModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavigationComponent,
    ResumeComponent,
    AboutComponent
  ],
  providers: [
    GlobalServiceManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
