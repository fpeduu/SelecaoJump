import { Injectable } from '@angular/core';
import { FlowchartApi } from './api/flowchart.api';

@Injectable()
export class FlowchartFacade {
  public constructor(private readonly api: FlowchartApi) {}

  public getImage() {
    return this.api.getImage();
  }

  public getStats() {
    return this.api.getStats();
  }
}
