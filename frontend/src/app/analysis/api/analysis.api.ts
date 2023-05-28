import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Case } from '../types/Case';
import { FlowchartSizeService } from 'src/app/shared/services/flowchart-switch.service';

@Injectable()
export class AnalysisApi {
  constructor(
    private readonly http: HttpClient,
    private readonly flowchartSizeService: FlowchartSizeService
  ) {}

  public fetchProcessosData() {
    return this.http.get<Case[]>(
      `/api/processos/?big_df=${this.flowchartSizeService.isFlowchartBig()}`
    );
  }

  public fetchProcessosDataByName(name: string) {
    return this.http.get<Case[]>(
      `/api/processos/${name}?big_df=${this.flowchartSizeService.isFlowchartBig()}`
    );
  }
}
