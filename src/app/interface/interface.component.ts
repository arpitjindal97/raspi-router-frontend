import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhysicalInterface} from '../data';
import {DataService} from '../data.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

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

  basic_info = [];
  wifi_info = [];

  formdata: FormGroup;

  @ViewChild('wpa_comp') wpa_comp;
  @ViewChild('ip_comp') ip_comp;
  @ViewChild('hostapd_comp') hostapd_comp;
  @ViewChild('dnsmasq_comp') dnsmasq_comp;


  constructor(private route: ActivatedRoute,
              public dialog: MatDialog,
              public dataService: DataService) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.dataService.getPhysicalInterface(params['inter_name']).subscribe(
        val => {
          this.UpdateVars(val);
        });
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
    this.wifi_info.push({key: 'Frequency', value: val.Info.Frequency});
    this.wifi_info.push({key: 'Link Quality', value: val.Info.LinkQuality});
    this.wifi_info.push({key: 'Channel', value: val.Info.Channel});
    this.wifi_info.push({key: 'WPA Configuration', value: ''});


    this.formdata.get('formMode').setValue(this.inter.Mode, {onlySelf: false});
    this.formdata.get('formBridgeMode').setValue(this.inter.BridgeMode, {onlySelf: false});
    this.formdata.get('formNatInter').setValue(this.inter.NatInterface, {onlySelf: false});

    this.wpa_comp.setWiFiInfo(this.wifi_info);
    this.wpa_comp.setCodeValue(this.inter.Wpa);
    this.hostapd_comp.setCodeValue(this.inter.Hostapd);
    this.dnsmasq_comp.setCodeValue(this.inter.Dnsmasq);

    this.ip_comp.formdata.get('formIpMode').setValue(this.inter.IpModes, {onlySelf: false});
    this.ip_comp.formdata.get('formIpAddress').setValue(this.inter.IpAddress, {onlySelf: false});
    this.ip_comp.formdata.get('formSubnetMask').setValue(this.inter.SubnetMask, {onlySelf: false});
    this.ip_comp.formdata.get('formGateway').setValue(this.inter.Gateway, {onlySelf: false});

  }

  formSubmitted() {

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {title: 'Applying changes'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    // update inter with new values

    const temp_inter: PhysicalInterface = new PhysicalInterface();

    temp_inter.Name = this.inter.Name;
    temp_inter.IsWifi = this.inter.IsWifi;
    temp_inter.Mode = this.formdata.get('formMode').value;
    temp_inter.BridgeMode = this.formdata.get('formBridgeMode').value;
    temp_inter.NatInterface = this.formdata.get('formNatInter').value;

    temp_inter.Wpa = this.wpa_comp.getCodeValue();
    temp_inter.Hostapd = this.hostapd_comp.getCodeValue();
    temp_inter.Dnsmasq = this.dnsmasq_comp.getCodeValue();

    temp_inter.IpModes = this.ip_comp.formdata.get('formIpMode').value;
    temp_inter.IpAddress = this.ip_comp.formdata.get('formIpAddress').value;
    temp_inter.SubnetMask = this.ip_comp.formdata.get('formSubnetMask').value;
    temp_inter.Gateway = this.ip_comp.formdata.get('formGateway').value;


    this.dataService.sendPhysicalInterfaceReconfigure(temp_inter).subscribe(
      val => {
        dialogRef.close();
      });

  }


}
