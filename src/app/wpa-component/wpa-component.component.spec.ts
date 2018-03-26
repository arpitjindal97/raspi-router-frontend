import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WpaComponentComponent} from './wpa-component.component';
import {MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CodeComponent} from '../code/code.component';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';

describe('WpaComponentComponent', () => {
  let component: WpaComponentComponent;
  let fixture: ComponentFixture<WpaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WpaComponentComponent,
        CodeComponent
      ],
      imports: [
        MatCardModule,
        FlexLayoutModule,
        CodemirrorModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
