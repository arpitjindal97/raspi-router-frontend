import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-wpa-component',
  templateUrl: './wpa-component.component.html',
  styleUrls: ['./wpa-component.component.css']
})
export class WpaComponentComponent implements OnInit {

  @ViewChild('codemirror_wpa') code_mirror;
  wifi_info = [];

  constructor() { }

  ngOnInit() {
  }

  setWiFiInfo(some: any) {
    this.wifi_info = some;
  }

  setCodeValue(some: string) {
    this.code_mirror.setValue(some);
  }

  getCodeValue() {
    return this.code_mirror.getValue();
  }

}
