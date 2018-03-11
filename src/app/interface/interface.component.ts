import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PhysicalInterface} from '../data';
import {DataService} from '../data.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  inter: PhysicalInterface = new PhysicalInterface();

  basic_info = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.dataService.getPhysicalInterface(params['inter_name']).
      subscribe(val => this.UpdateVars(val) );
    });
  }

  UpdateVars(val: PhysicalInterface) {
    this.inter = val;
    this.basic_info = [];
    this.basic_info.push({key: 'Interface Name', value: val.Name});
    this.basic_info.push({key: 'IP Address', value: val.Info.IpAddress});
    this.basic_info.push({key: 'Broadcast Address', value: val.Info.BroadcastAddress});
    this.basic_info.push({key: 'Gateway Address', value: val.Info.Gateway});
    this.basic_info.push({key: 'MAC Address', value: val.Info.MacAddress});
    this.basic_info.push({key: 'Received Bytes', value: val.Info.RecvBytes});
    this.basic_info.push({key: 'Received Packets', value: val.Info.RecvPackts});
    this.basic_info.push({key: 'Transmitted Bytes', value: val.Info.TransBytes});
    this.basic_info.push({key: 'Transmitted Packets', value: val.Info.TransPackts});
  }

}
