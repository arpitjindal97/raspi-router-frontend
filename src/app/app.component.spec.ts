import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SidenavdemoComponent} from './sidenavdemo/sidenavdemo.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidenavdemoComponent
      ]
    }).compileComponents();
  }));
});
