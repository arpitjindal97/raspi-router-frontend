import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostapdCompComponent } from './hostapd-comp.component';

describe('HostapdCompComponent', () => {
  let component: HostapdCompComponent;
  let fixture: ComponentFixture<HostapdCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostapdCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostapdCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
