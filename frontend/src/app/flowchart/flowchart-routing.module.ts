import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowchartComponent } from './pages/flowchart/flowchart.component';

const routes: Routes = [
  {
    path: 'flowchart',
    component: FlowchartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalysisRoutingModule {}
