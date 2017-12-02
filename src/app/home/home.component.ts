<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
=======
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
>>>>>>> 0d13a0e9f8391999c6e39df83db7fb6cd99693d0

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
<<<<<<< HEAD
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') public myNav: MatSidenav;
=======
export class HomeComponent implements AfterViewInit {
>>>>>>> 0d13a0e9f8391999c6e39df83db7fb6cd99693d0

  constructor() { }

  ngAfterViewInit() {
    // google npm typewriting and use that to write cursor greeting lines
  }
}
