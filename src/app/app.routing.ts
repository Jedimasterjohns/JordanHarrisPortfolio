import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: ''},
  { path: 'resume', component: ResumeComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
