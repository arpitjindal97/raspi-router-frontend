import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Status, StatusItem} from '../data';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {

  details: StatusItem[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getStatus().
    subscribe(val => this.details = Status.getArrayMap(val));
  }


}
