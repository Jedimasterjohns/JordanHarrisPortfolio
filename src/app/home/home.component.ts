import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit() {
    const greetingLine =  'UX/UI Designer with a voracious curiosity and a tenacity for creativity.<br>' +
                          'Recent graduate seeking opportunities in UX/UI software development and web design.<br><br>' +
                          'I create <em>simple workflows</em> and <em>satisfying user experiences</em>.';
    let typed = new Typed('.intro-text', {
      strings: [greetingLine],
      startDelay: 1500,
      typeSpeed: 25,
      autoInsertCss: true,
      cursorChar: ' |',
      fadeOut: true
    });
  }
}
