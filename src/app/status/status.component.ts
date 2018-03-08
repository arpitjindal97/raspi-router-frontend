import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  details = [
    {key: 'Distribution ID', value: 'Arch'},
    {key: 'Description', value: 'Arch Linux'},
    {key: 'Release', value: 'dddd'},
    {key: 'Codename', value: 'dddd'},
    {key: 'Hostname', value: 'dddd'},
    {key: 'Kernel Release', value: 'dddd'},
    {key: 'Architecture', value: 'dddd'},
    {key: 'Model Name', value: 'dddd'},
    {key: 'No. of Cores', value: 'dddd'},
    {key: 'Local Time', value: 'dddd'},
    {key: 'TimeZone', value: 'dddd'},
    {key: 'Up Time', value: 'dddd'},
    {key: 'Up Since', value: 'dddd'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
