import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { FlowchartSizeService } from './services/flowchart-switch.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule, MatIconModule, MatToolbarModule, AppRoutingModule],
  providers: [FlowchartSizeService],
  bootstrap: [],
  exports: [HeaderComponent],
})
export class SharedModule {}
