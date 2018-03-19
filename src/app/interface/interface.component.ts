import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhysicalInterface} from '../data';
import {DataService} from '../data.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CodemirrorComponent} from '../codemirror/codemirror.component';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {

  inter: PhysicalInterface = new PhysicalInterface();
  mode_options = [
    {name: 'Default', value: 'default'},
    {name: 'Hotspot', value: 'hotspot'},
    {name: 'Bridge', value: 'bridge'},
    {name: 'OFF', value: 'off'},
  ];
  nat_options = [
    {name: 'enp7s0'},
    {name: 'lo'}
  ];

  basic_info = [];
  wifi_info = [];

  formdata: FormGroup;

  @ViewChild('wpa_comp') wpa_comp;
  @ViewChild('ip_comp') ip_comp;
  @ViewChild('hostapd_comp') hostapd_comp;
  @ViewChild('dnsmasq_comp') dnsmasq_comp;


  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.dataService.getPhysicalInterface(params['inter_name']).subscribe(val => this.UpdateVars(val));
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
      })

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
    this.wifi_info.push({key: 'WPA Configuration', value: ''});

    // this.code_wpa.setValue(val.Wpa);

    this.formdata.get('formMode').setValue(this.inter.Mode, {onlySelf: false});
    this.formdata.get('formBridgeMode').setValue(this.inter.BridgeMode, {onlySelf: false});
    this.formdata.get('formNatInter').setValue(this.inter.NatInterface, {onlySelf: false});

    this.wpa_comp.setWiFiInfo(this.wifi_info);
    this.wpa_comp.setCodeValue(this.inter.Wpa);

    this.hostapd_comp.setCodeValue(this.inter.Hostapd);
    this.dnsmasq_comp.setCodeValue(this.inter.Dnsmasq);

  }

}
