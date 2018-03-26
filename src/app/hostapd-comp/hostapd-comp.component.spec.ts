import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HostapdCompComponent} from './hostapd-comp.component';
import {MatCardModule} from '@angular/material';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {CodeComponent} from '../code/code.component';

describe('HostapdCompComponent', () => {
  let component: HostapdCompComponent;
  let fixture: ComponentFixture<HostapdCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HostapdCompComponent,
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
    fixture = TestBed.createComponent(HostapdCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
