import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PhysicalInterface} from '../data';
import {DataService} from '../data.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {

  inter: PhysicalInterface = new PhysicalInterface();
  mode_options = [
    {name: 'Default'},
    {name: 'Hotspot'},
    {name: 'Bridge'},
    {name: 'OFF'},
  ];
  nat_options = [
    {name: 'enp7s0'},
    {name: 'lo'}
  ];

  basic_info = [];
  wifi_info = [];

  formMode;
  formBridgeMode;
  formNatInter;
  formdata: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.dataService.getPhysicalInterface(params['inter_name']).
      subscribe(val => this.UpdateVars(val) );
    });


    this.formdata = new FormGroup({
      formMode: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
      formBridgeMode: new FormControl('', {
        updateOn: 'change'
      }),
      formNatInter: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
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

    this.wifi_info = [];
    this.wifi_info.push({key: 'Connected to', value: val.Info.ConntectedTo});
    this.wifi_info.push({key: 'AP MAC Address', value: val.Info.ApMacAddr});
    this.wifi_info.push({key: 'Bit Rate', value: val.Info.BitRate});
    this.wifi_info.push({key: 'Frequency', value: val.Info.Frequency + ' Mhz'});
    this.wifi_info.push({key: 'Link Quality', value: val.Info.LinkQuality});
    this.wifi_info.push({key: 'Channel', value: val.Info.Channel});

  }

}
