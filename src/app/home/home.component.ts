import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit() {

    const greetingLine1 = 'Software developer with a tenacity to increase efficiency and inspire creativity.';
    const greetingLine2 = 'Jr Developer at Zamplebox specializing in web and desktop test automation.';
    const greetingLine3 = 'I build <em>sturdy testing frameworks</em> and <em>responsive web applications</em>.';

    $('.intro-greeting').hide().slideDown('slow', function() {
      $('.intro-text-1').typed({
          strings: ['^1500' + greetingLine1 + '^1800'],
          typeSpeed: 0,
          cursorChar: ' |',
          callback: function() {
              $('.typed-cursor').fadeOut('fast');
              $('.intro-text-2').typed({
                  strings: [greetingLine2 + '^1800<br>'],
                  typeSpeed: 0,
                  cursorChar: ' |',
                  callback: function() {
                      $('.typed-cursor').fadeOut('fast');
                      $('.intro-text-3').typed({
                          strings: [greetingLine3],
                          typeSpeed: 0,
                          cursorChar: ' |',
                          callback: function() {
                              $('.scroll-prompter').fadeIn('slow');
                          }
                      });
                  }
              });
          }
      });
  });
  }
}
