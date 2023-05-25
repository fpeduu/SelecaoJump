import { Component } from '@angular/core';
import { AnalysisFacade } from '../../analysis.facade';
import { Processo } from '../../types/Processo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent {
  selectedMovimento: string = 'A3';
  processoList: Processo[] = [];

  constructor(private facade: AnalysisFacade, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params['movimento']) this.selectedMovimento = params['movimento'];
    });

    // this.facade.fetchProcessosData();
    this.facade.fetchProcessosDataByName(this.selectedMovimento);

    this.facade.getProcessoData().subscribe((processoData: any) => {
      console.log(processoData.cases);
      this.processoList = processoData.cases;
    });
  }
}
