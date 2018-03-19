import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent implements OnInit {


  formdata: FormGroup;

  constructor() { }

  ngOnInit() {

    this.formdata = new FormGroup({
      formIpMode: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
      formIpAddress: new FormControl('', {
        updateOn: 'change'
      }),
      formSubnetMask: new FormControl('', {
        updateOn: 'change'
      }),
      formGateway: new FormControl('', {
        updateOn: 'change'
      })

    });

  }


}
