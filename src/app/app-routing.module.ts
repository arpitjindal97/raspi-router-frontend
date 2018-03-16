import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { InterfaceComponent } from './interface/interface.component';
import {BridgeComponent} from './bridge/bridge.component';

const routes: Routes = [
  { path: '', component: StatusComponent },
  { path: 'status', component: StatusComponent },
  {path : 'interface/:inter_name', component: InterfaceComponent },
  {path : 'bridge', component: BridgeComponent }

];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
