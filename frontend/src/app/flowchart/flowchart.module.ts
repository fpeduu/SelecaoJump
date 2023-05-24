import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowchartComponent } from './pages/flowchart/flowchart.component';
import { FlowchartApi } from './api/flowchart.api';
import { FlowchartFacade } from './flowchart.facade';
import { flowchartInitializerProvider } from './flowchart.initializer';
import { FlowchartRoutingModule } from './flowchart-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FlowchartImageComponent } from './components/flowchart-image/flowchart-image.component';

@NgModule({
  providers: [FlowchartApi, FlowchartFacade, flowchartInitializerProvider],
  declarations: [FlowchartComponent, FlowchartImageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    FlowchartRoutingModule,
  ],
})
export class FlowchartModule {}
