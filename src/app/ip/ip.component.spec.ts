import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IpComponent} from './ip.component';
import {MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatRadioModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('IpComponent', () => {
  let component: IpComponent;
  let fixture: ComponentFixture<IpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IpComponent
      ],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatRadioModule,
        FlexLayoutModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(IpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
