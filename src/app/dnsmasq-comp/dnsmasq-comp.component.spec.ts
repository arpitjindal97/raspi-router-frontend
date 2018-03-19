import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnsmasqCompComponent } from './dnsmasq-comp.component';

describe('DnsmasqCompComponent', () => {
  let component: DnsmasqCompComponent;
  let fixture: ComponentFixture<DnsmasqCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnsmasqCompComponent ]
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
