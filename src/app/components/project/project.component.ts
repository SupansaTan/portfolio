import { Component, OnInit } from '@angular/core';
import { ProjectList } from 'src/app/constants/project.constant';
import { PlatfromType } from 'src/app/enum/platform.enum';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectList: Array<ProjectModel> = ProjectList;
  platformType = PlatfromType;

  constructor() { }

  ngOnInit(): void {
  }

}
