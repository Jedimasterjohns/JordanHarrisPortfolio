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
import { PortfolioComponent } from './portfolio/portfolio.component';

import { GlobalServiceManager } from './_services/global-service-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavigationComponent,
    ResumeComponent,
    AboutComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    routing
  ],
  providers: [
    GlobalServiceManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
