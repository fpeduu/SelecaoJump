import { Injectable } from '@angular/core';
import { AnalysisState } from './state/analysis-state/analysis.state';
import { AnalysisApi } from './api/analysis.api';

@Injectable()
export class AnalysisFacade {
  public constructor(
    private readonly state: AnalysisState,
    private readonly api: AnalysisApi
  ) {}

  public fetchProcessosData() {
    this.api.fetchProcessosData().subscribe((processosData) => {
      console.log(processosData);
      this.state.setProcessoData(processosData);
    });
  }

  public fetchProcessosDataByName(name: string) {
    this.api.fetchProcessosDataByName(name).subscribe((processosData) => {
      this.state.setProcessoData(processosData);
    });
  }

  public getProcessoData() {
    return this.state.getProcessoData();
  }
}
