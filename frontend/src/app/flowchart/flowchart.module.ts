import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowchartComponent } from './pages/flowchart/flowchart.component';
import { FlowchartApi } from './api/flowchart.api';
import { FlowchartFacade } from './flowchart.facade';
import { flowchartInitializerProvider } from './flowchart.initializer';
import { FlowchartRoutingModule } from './flowchart-routing.module';

import { MatCardModule } from '@angular/material/card';
import { FlowchartImageComponent } from './components/flowchart-image/flowchart-image.component';
import { ProcessStatsComponent } from './components/process-stats/process-stats.component';

@NgModule({
  providers: [FlowchartApi, FlowchartFacade, flowchartInitializerProvider],
  declarations: [
    FlowchartComponent,
    FlowchartImageComponent,
    ProcessStatsComponent,
  ],
  imports: [CommonModule, MatCardModule, FlowchartRoutingModule],
})
export class FlowchartModule {}
