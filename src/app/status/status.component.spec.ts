import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponent } from './status.component';
import {MatCardModule} from '@angular/material';
import {DataService} from '../data.service';
import {HttpClientModule} from '@angular/common/http';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusComponent ],
      imports: [
        MatCardModule,
        HttpClientModule
      ],
      providers: [
        DataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
