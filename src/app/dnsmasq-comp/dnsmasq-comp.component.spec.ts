import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DnsmasqCompComponent} from './dnsmasq-comp.component';
import {MatCardModule} from '@angular/material';
import {CodeComponent} from '../code/code.component';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';

describe('DnsmasqCompComponent', () => {
  let component: DnsmasqCompComponent;
  let fixture: ComponentFixture<DnsmasqCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DnsmasqCompComponent,
        CodeComponent
      ],
      imports: [
        MatCardModule,
        CodemirrorModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnsmasqCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
