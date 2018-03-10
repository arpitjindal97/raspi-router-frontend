import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavdemo',
  templateUrl: './sidenavdemo.component.html',
  styleUrls: ['./sidenavdemo.component.css']
})
export class SidenavdemoComponent implements OnInit {

   physical_interface_list = [
     {
    name: 'wlp6s0',
    link: 'interface/'
  }, {
    name: 'enp7s0',
    link: 'interface/'
  }, ];

  hide_var = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.hide_var = !this.hide_var;
  }

}
