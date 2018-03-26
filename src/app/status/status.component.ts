import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Status} from '../data';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {

  details: object[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getStatus().subscribe(
      (val) => this.createArrayItems(val),
      (err) => {}
    );
  }

  createArrayItems(val: Status) {

    if (val == null) {
      return;
    }

    this.details = [
      {key: 'Distribution Id', value: val.DistributionId},
      {key: 'Description', value: val.Description},
      {key: 'Release', value: val.Release},
      {key: 'Codename', value: val.Codename},
      {key: 'Hostname', value: val.Hostname},
      {key: 'Kernel Release', value: val.KernelRelease},
      {key: 'Architecture', value: val.Architecture},
      {key: 'Model Name', value: val.ModelName},
      {key: 'CPUs', value: val.CPUs},
      {key: 'Local Time', value: val.LocalTime},
      {key: 'Time Zone', value: val.TimeZone},
      {key: 'Up Time', value: val.UpTime},
      {key: 'Up Since', value: val.UpSince},
    ];
  }

}
