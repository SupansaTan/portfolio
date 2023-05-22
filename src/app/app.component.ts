import { Component } from '@angular/core';
import { AboutMe } from './constants/about-me.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  aboutMe: string = AboutMe;
}
