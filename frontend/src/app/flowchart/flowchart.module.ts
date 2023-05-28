import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowchartComponent } from './pages/flowchart/flowchart.component';
import { FlowchartApi } from './api/flowchart.api';
import { FlowchartFacade } from './flowchart.facade';
import { flowchartInitializerProvider } from './flowchart.initializer';
import { FlowchartRoutingModule } from './flowchart-routing.module';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { FlowchartImageComponent } from './components/flowchart-image/flowchart-image.component';
import { CasesStatsComponent } from './components/cases-stats/cases-stats.component';

@NgModule({
  providers: [FlowchartApi, FlowchartFacade, flowchartInitializerProvider],
  declarations: [
    FlowchartComponent,
    FlowchartImageComponent,
    CasesStatsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FlowchartRoutingModule,
  ],
})
export class FlowchartModule {}
