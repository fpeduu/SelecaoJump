import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FlowchartFacade } from '../../flowchart.facade';
import { Processo } from '../../types/Processo';
// import * as d3 from 'd3';
import { Observable } from 'rxjs';
import { ProcessoStats } from '../../types/ProcessoStats';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.scss'],
})
export class FlowchartComponent {
  flowchartObservable: Observable<string>;
  flowchartImage: string = '';
  flowchartStats: ProcessoStats = {} as ProcessoStats;

  constructor(private facade: FlowchartFacade) {
    this.flowchartObservable = this.facade.getImage();

    this.flowchartObservable.subscribe((image: string) => {
      this.flowchartImage = image;
    });

    this.facade.getStats().subscribe((stats: ProcessoStats[]) => {
      this.flowchartStats = stats[0];
    });
  }
}
