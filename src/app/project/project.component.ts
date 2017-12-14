import { Project } from './../_models/project.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
@Input() project: Project;
  constructor() { }

  ngOnInit() {
  }

}