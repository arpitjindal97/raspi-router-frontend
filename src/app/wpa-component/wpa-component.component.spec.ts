import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpaComponentComponent } from './wpa-component.component';

describe('WpaComponentComponent', () => {
  let component: WpaComponentComponent;
  let fixture: ComponentFixture<WpaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpaComponentComponent ]
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
