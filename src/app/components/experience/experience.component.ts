import { Component, OnInit } from '@angular/core';
import { ExperienceList } from 'src/app/constants/experience.constant';
import { ExperienceModel } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceList: Array<ExperienceModel> = ExperienceList;

  constructor() { }

  ngOnInit(): void {
  }

}
