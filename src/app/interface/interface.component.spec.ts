import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InterfaceComponent} from './interface.component';
import {
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule, MatInputModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import {WpaComponentComponent} from '../wpa-component/wpa-component.component';
import {DnsmasqCompComponent} from '../dnsmasq-comp/dnsmasq-comp.component';
import {HostapdCompComponent} from '../hostapd-comp/hostapd-comp.component';
import {IpComponent} from '../ip/ip.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {CodeComponent} from '../code/code.component';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {RouterTestingModule} from '@angular/router/testing';
import {DataService} from '../data.service';
import { HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('InterfaceComponent', () => {
  let component: InterfaceComponent;
  let fixture: ComponentFixture<InterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InterfaceComponent,
        WpaComponentComponent,
        DnsmasqCompComponent,
        HostapdCompComponent,
        IpComponent,
        CodeComponent
      ],
      imports: [
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        CodemirrorModule,
        RouterTestingModule,
        MatDialogModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule
      ],
      providers: [
        DataService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
