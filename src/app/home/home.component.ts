import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit {
  public get typedCursor(): Element {
    return document.querySelectorAll('.typed-cursor')[0];
  }
  constructor() { }

  ngAfterViewInit() {
    const greetingLine = 'Software developer with a tenacity to increase efficiency and inspire creativity.<br>' +
                          'Jr Developer at Zamplebox specializing in web and desktop test automation.<br><br>' +
                          'I build <em>sturdy testing frameworks</em> and <em>responsive web applications</em>.';
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
