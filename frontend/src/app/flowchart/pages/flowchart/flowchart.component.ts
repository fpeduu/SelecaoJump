import { Component } from '@angular/core';
import { AnalysisFacade } from '../../flowchart.facade';
import { Processo } from '../../types/Processo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.scss'],
})
export class FlowchartComponent {
  selectedMovimento: string = 'Expedição de movimento';
  processoList: Processo[] = [];

  constructor(private facade: AnalysisFacade) {
    facade.getProcessoData().subscribe((processoData: any) => {
      this.processoList = processoData;
    });
  }
}
