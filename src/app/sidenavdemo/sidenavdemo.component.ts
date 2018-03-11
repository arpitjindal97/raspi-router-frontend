import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {PhysicalInterface} from '../data';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenavdemo',
  templateUrl: './sidenavdemo.component.html',
  styleUrls: ['./sidenavdemo.component.css']
})
export class SidenavdemoComponent implements OnInit {

  physical_interface_list: object[] = [];

  hide_var = true;

  mobileQuery: MediaQueryList;


  private _mobileQueryListener: () => void;

  constructor(private dataService: DataService,
              changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit() {
    this.dataService.getPhysicalInterfaceArray().subscribe(val => this.createPhysicalInterList(val));

  }

  createPhysicalInterList(val: PhysicalInterface[]) {
    const obj: PhysicalInterface[] = PhysicalInterface.getArrayFromJSON(val);
    const list: object[] = [];
    obj.forEach(function (item) {
      list.push({name: item.Name});
    });
    this.physical_interface_list = list;

  }

}
