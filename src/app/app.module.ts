import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatGridListModule, MatButtonModule, MatIconModule, MatSidenavModule, MatCardModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidenavdemoComponent } from './sidenavdemo/sidenavdemo.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StatusComponent } from './status/status.component';
import { AppRoutingModule } from './/app-routing.module';
import { InterfaceComponent } from './interface/interface.component';
import { BridgeComponent } from './bridge/bridge.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavdemoComponent,
    ToolbarComponent,
    StatusComponent,
    InterfaceComponent,
    BridgeComponent
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
