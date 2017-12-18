import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as Typed from 'typed.js';
import { GlobalServiceManager } from '../_services/global-service-manager.service';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit {
  showScrollPrompter: Observable<boolean>;

  constructor(private globalServiceManager: GlobalServiceManager) {
    this.showScrollPrompter = globalServiceManager.showScrollPrompter;
   }

  ngAfterViewInit() {
    const greetingLine =  'UX/UI Designer with a voracious curiosity and a tenacity for creativity.<br>' +
                          'Recent graduate seeking opportunities in UX/UI software development and web design.<br><br>' +
                          'I create <em>simple workflows</em> and <em>satisfying user experiences</em>.';
    let typed = new Typed('.intro-text', {
      strings: [greetingLine],
      startDelay: 1500,
      typeSpeed: 10,
      autoInsertCss: true,
      cursorChar: ' |',
      fadeOut: true,
      onComplete: () => { this.globalServiceManager.activateScrollPrompter(); }
    });
  }
}
