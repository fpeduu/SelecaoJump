import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FlowchartFacade } from '../../flowchart.facade';
import { Processo } from '../../types/Processo';
// import * as d3 from 'd3';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.scss'],
})
export class FlowchartComponent {
  flowchartObservable: any;
  flowchartImage: string = '';

  constructor(private facade: FlowchartFacade) {
    this.flowchartObservable = this.facade.getImage();

    this.flowchartObservable.subscribe((image: any) => {
      this.flowchartImage = image;
    });
  }
}
