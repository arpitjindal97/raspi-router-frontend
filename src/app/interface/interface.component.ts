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

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.dataService.getPhysicalInterface(params['inter_name']).
      subscribe(val => this.inter = val );
    });
  }


}
