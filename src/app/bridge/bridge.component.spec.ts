import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeComponent } from './bridge.component';
import {
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {RouterTestingModule} from '@angular/router/testing';
import {IpComponent} from '../ip/ip.component';
import {DataService} from '../data.service';

describe('BridgeComponent', () => {
  let component: BridgeComponent;
  let fixture: ComponentFixture<BridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IpComponent,
        BridgeComponent
      ],
      imports: [
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatDialogModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule
      ],
      providers: [ DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
