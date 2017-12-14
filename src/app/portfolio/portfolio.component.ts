import { Project } from './../_models/project.model';
import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from './../project/project.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
projects: Project[];
  constructor() {
    this.projects = [
      new Project('https://twitter.com/Dusk07', './../../_assets/Profile.jpg', 'Description'),
      new Project('https://www.linkedin.com/in/jordan-harris-0037424a/', './../../_assets/Profile.jpg', 'Description' ),
      new Project('https://www.facebook.com/jordansharris', './../../_assets/Profile.jpg', 'Description' ),
      new Project('https://www.instagram.com/jordansharris/?hl=en', './../../_assets/Profile.jpg', 'Description' ),
      new Project('https://www.youtube.com/channel/UCOSPTyVT3rR12TRyP8d6LOg', './../../_assets/Profile.jpg', 'Description' ),
      new Project('https://www.reddit.com', './../../_assets/Profile.jpg', 'Description' )
    ];
   }

  ngOnInit() {
  }

}
