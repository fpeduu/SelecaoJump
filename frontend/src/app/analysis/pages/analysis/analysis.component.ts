import { Component } from '@angular/core';
import { AnalysisFacade } from '../../analysis.facade';
import { Case } from '../../types/Case';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent {
  selectedMovimento: string = '';
  title: string = '';
  processoList: Case[] = [];

  constructor(private facade: AnalysisFacade, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params['movimento']) {
        this.selectedMovimento = params['movimento'];
        this.facade.fetchProcessosDataByName(this.selectedMovimento);
      } else {
        this.facade.fetchProcessosData();
      }
    });

    this.facade.getProcessoData().subscribe((processoData: any) => {
      if (!processoData.cases || processoData.cases.length === 0) {
        this.title = 'Movimento não encontrado';
      } else this.title = `Movimento ${this.selectedMovimento}`;
      this.processoList = processoData.cases;
    });
  }
}
