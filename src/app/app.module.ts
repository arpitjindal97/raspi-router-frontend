import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {
  MatGridListModule,
  MatButtonModule,
  MatExpansionModule,
  MatSidenavModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatRadioModule
} from '@angular/material';

import {LayoutModule} from '@angular/cdk/layout';

import {AppComponent} from './app.component';
import {SidenavdemoComponent} from './sidenavdemo/sidenavdemo.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {StatusComponent} from './status/status.component';
import {AppRoutingModule} from './app-routing.module';
import {InterfaceComponent} from './interface/interface.component';
import {BridgeComponent} from './bridge/bridge.component';

import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {MediaMatcher} from '@angular/cdk/layout';
import { CodemirrorModule } from 'ng2-codemirror';
import { CodemirrorComponent } from './codemirror/codemirror.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidenavdemoComponent,
    ToolbarComponent,
    StatusComponent,
    InterfaceComponent,
    BridgeComponent,
    CodemirrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    AppRoutingModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    HttpClientModule,
    LayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    CodemirrorModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [DataService, MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule {
}
