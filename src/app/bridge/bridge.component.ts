import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BridgeInterface} from '../data';
import {DataService} from '../data.service';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.css']
})
export class BridgeComponent implements OnInit {

  formdata: FormGroup;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      formSelectedBridge: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
      formExistingSlave: new FormControl('', {
        updateOn: 'change'
      }),
      formAddSlave: new FormControl('', {
        updateOn: 'change'
      }),
      formCreateInterface: new FormControl('', {
        updateOn: 'change'
      })

    });
  }

  create_interface() {
    const str: string = this.formdata.get('formCreateInterface').value;

    const new_bridge: BridgeInterface = {
      Name: str,
      Slaves: [],
      IpModes:  'dhcp',
      IpAddress:  '',
      SubnetMask: '',
      Gateway:    '',
      Info:       null
    };

    this.dataService.getBridgeInterface(new_bridge.Name).subscribe(
      val => {
        console.log(val);
      });
  }
}
