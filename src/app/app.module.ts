import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatGridListModule,
         MatButtonModule,
         MatExpansionModule,
         MatSidenavModule,
         MatCardModule,
         MatToolbarModule,
         MatListModule,
         MatMenuModule,
         MatIconModule
      } from '@angular/material';


import { AppComponent } from './app.component';
import { SidenavdemoComponent } from './sidenavdemo/sidenavdemo.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StatusComponent } from './status/status.component';
import { AppRoutingModule } from './app-routing.module';
import { InterfaceComponent } from './interface/interface.component';
import { BridgeComponent } from './bridge/bridge.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';


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
    AppRoutingModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
