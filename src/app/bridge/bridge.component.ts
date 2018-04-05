import {Component, OnInit} from '@angular/core';
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
  bridge_list: string[];

  constructor(public dataService: DataService) {
  }

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
    this.dataService.getBridgeInterfaceArray().subscribe(
      (val: BridgeInterface[]) => {
        this.bridge_list = [];
        for (let i = 0; i < val.length; i++) {
          this.bridge_list.push(val[i].Name);
        }
      }
    );

  }

  formCreateInterface() {
    const str: string = this.formdata.get('formCreateInterface').value;

    const new_bridge: BridgeInterface = {
      Name: str,
      Slaves: [],
      IpModes: 'dhcp',
      IpAddress: '',
      SubnetMask: '',
      Gateway: '',
      Info: null
    };

    this.dataService.putBridgeInterface(new_bridge).subscribe(
      val => {
        console.log(val);
      });
  }
}
