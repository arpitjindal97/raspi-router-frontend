import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SidenavdemoComponent} from './sidenavdemo.component';
import {MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {DataService} from '../data.service';
import {HttpClientModule} from '@angular/common/http';
import {MediaMatcher} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SidenavdemoComponent', () => {
  let component: SidenavdemoComponent;
  let fixture: ComponentFixture<SidenavdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidenavdemoComponent
      ],
      imports: [
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterTestingModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [
        DataService,
        MediaMatcher
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
