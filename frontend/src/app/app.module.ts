import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalysisModule } from './analysis/analysis.module';
import { HttpClientModule } from '@angular/common/http';
import { FlowchartModule } from './flowchart/flowchart.module';
import { FlowchartSizeService } from './shared/services/flowchart-switch.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AnalysisModule,
    FlowchartModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [FlowchartSizeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
