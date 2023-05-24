import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowchartComponent } from './pages/flowchart/flowchart.component';
import { AnalysisState } from './state/analysis-state/analysis.state';
import { AnalysisApi } from './api/flowchart.api';
import { AnalysisFacade } from './flowchart.facade';
import { analysisInitializerProvider } from './flowchart.initializer';
import { AnalysisRoutingModule } from './flowchart-routing.module';
import { AnalysisTableComponent } from './components/analysis-table/analysis-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  providers: [
    AnalysisState,
    AnalysisApi,
    AnalysisFacade,
    analysisInitializerProvider,
  ],
  declarations: [FlowchartComponent, AnalysisTableComponent],
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
