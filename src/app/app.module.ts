import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatRadioModule,
  MatInputModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {MediaMatcher} from '@angular/cdk/layout';


import {AppComponent} from './app.component';
import {SidenavdemoComponent} from './sidenavdemo/sidenavdemo.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {StatusComponent} from './status/status.component';
import {AppRoutingModule} from './app-routing.module';
import {InterfaceComponent} from './interface/interface.component';
import {BridgeComponent} from './bridge/bridge.component';
import {DataService} from './data.service';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import {CodeComponent} from './code/code.component';
import {ReactiveFormsModule} from '@angular/forms';
import {WpaComponentComponent} from './wpa-component/wpa-component.component';
import {IpComponent} from './ip/ip.component';
import {HostapdCompComponent} from './hostapd-comp/hostapd-comp.component';
import {DnsmasqCompComponent} from './dnsmasq-comp/dnsmasq-comp.component';
import {DialogComponent} from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavdemoComponent,
    ToolbarComponent,
    StatusComponent,
    InterfaceComponent,
    BridgeComponent,
    CodeComponent,
    WpaComponentComponent,
    IpComponent,
    HostapdCompComponent,
    DnsmasqCompComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    AppRoutingModule,
    MatListModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    CodemirrorModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [DialogComponent],
  providers: [DataService, MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule {
}
