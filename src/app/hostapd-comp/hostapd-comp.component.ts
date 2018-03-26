import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-hostapd-comp',
  templateUrl: './hostapd-comp.component.html',
  styleUrls: ['./hostapd-comp.component.css']
})
export class HostapdCompComponent implements OnInit {

  @ViewChild('code') code_mirror;

  constructor() { }

  ngOnInit() {
  }

  setCodeValue(some: string) {
    this.code_mirror.setContentValue(some);
  }

  getCodeValue() {
    return this.code_mirror.getContentValue();
  }

}
