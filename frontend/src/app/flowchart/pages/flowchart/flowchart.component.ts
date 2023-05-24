import { Component } from '@angular/core';
import { FlowchartFacade } from '../../flowchart.facade';
import { Processo } from '../../types/Processo';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.scss'],
})
export class FlowchartComponent {
  selectedMovimento: string = 'Expedição de movimento';
  processoList: Processo[] = [];

  constructor(private facade: FlowchartFacade) {
    const image = this.facade.getImage();
    console.log(image);
  }
}
