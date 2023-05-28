import { Injectable } from '@angular/core';

@Injectable()
export class FlowchartSizeService {
  bigFlowchart = false;

  constructor() {
    const bigFlowchart = localStorage.getItem('bigFlowchart');
    if (bigFlowchart) {
      this.bigFlowchart = JSON.parse(bigFlowchart);
    }
  }

  public switchFlowchartSize() {
    localStorage.setItem('bigFlowchart', JSON.stringify(!this.bigFlowchart));
    this.bigFlowchart = !this.bigFlowchart;
  }

  public isFlowchartBig() {
    return this.bigFlowchart;
  }
}
