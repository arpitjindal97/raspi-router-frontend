import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {PhysicalInterface} from '../data';

@Component({
  selector: 'app-sidenavdemo',
  templateUrl: './sidenavdemo.component.html',
  styleUrls: ['./sidenavdemo.component.css']
})
export class SidenavdemoComponent implements OnInit {

  physical_interface_list: object[] = [];

  hide_var = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPhysicalInterfaceArray().
    subscribe(val => this.createPhysicalInterList(val));

  }

  createPhysicalInterList(val: PhysicalInterface[]) {
    const obj: PhysicalInterface[] = PhysicalInterface.getArrayFromJSON(val);
    const list: object[] = [];
    obj.forEach(function(item) {
      list.push({name: item.Name});
    });
    this.physical_interface_list = list;

  }

}
