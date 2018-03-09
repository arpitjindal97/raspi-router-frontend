import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavdemo',
  templateUrl: './sidenavdemo.component.html',
  styleUrls: ['./sidenavdemo.component.css']
})
export class SidenavdemoComponent implements OnInit {

   data = [
     {
    title: 'Home',
    icon: 'home',
    link: '/page1/'
  }, {
    title: 'Email us',
    icon: 'envelope',
    link: '/page2/'
  }, {
    title: 'Profile',
    icon: 'user',
    link: '/page3/'
  }, {
    title: 'Print',
    icon: 'print',
    link: '/page4/'
  }, ];

   hide = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.hide = !this.hide;
  }

}
