import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeComponent } from './code.component';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';

describe('CodeComponent', () => {
  let component: CodeComponent;
  let fixture: ComponentFixture<CodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeComponent ],
      imports: [ CodemirrorModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
