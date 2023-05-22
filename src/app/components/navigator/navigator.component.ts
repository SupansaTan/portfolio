import { Component, OnInit } from '@angular/core';
import { NavMenuList } from 'src/app/constants/nav-menu.constant';
import { MenuItem } from 'src/app/models/nav-menu.model';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  navMenuList: Array<MenuItem> = NavMenuList;

  constructor() { }

  ngOnInit(): void {
  }

}
