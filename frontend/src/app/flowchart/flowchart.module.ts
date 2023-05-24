import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowchartComponent } from './pages/flowchart/flowchart.component';
import { FlowchartApi } from './api/flowchart.api';
import { FlowchartFacade } from './flowchart.facade';
import { analysisInitializerProvider } from './flowchart.initializer';
import { AnalysisRoutingModule } from './flowchart-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  providers: [FlowchartApi, FlowchartFacade, analysisInitializerProvider],
  declarations: [FlowchartComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    AnalysisRoutingModule,
  ],
})
export class FlowchartModule {}
