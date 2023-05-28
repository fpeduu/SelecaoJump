import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlowchartSizeService } from 'src/app/shared/services/flowchart-switch.service';

@Injectable()
export class FlowchartApi {
  constructor(
    private readonly http: HttpClient,
    private readonly flowchartSizeService: FlowchartSizeService
  ) {}

  public getImage() {
    return this.http.get<any>(
      `/api/visualization/image/?big_df=${this.flowchartSizeService.isFlowchartBig()}`,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  public getStats() {
    return this.http.get<any>(
      `/api/processos/stats/?big_df=${this.flowchartSizeService.isFlowchartBig()}`
    );
  }
}
