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


  hide_var = true;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private dataService: DataService,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.dataService.getPhysicalInterfaceArray();

  }


}
