import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dnsmasq-comp',
  templateUrl: './dnsmasq-comp.component.html',
  styleUrls: ['./dnsmasq-comp.component.css']
})
export class DnsmasqCompComponent implements OnInit {

  @ViewChild('codemirror') code_mirror;
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
