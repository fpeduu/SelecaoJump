import { Component } from '@angular/core';
import { FlowchartFacade } from '../../flowchart.facade';
import { Observable, finalize } from 'rxjs';
import { CasesStats } from '../../types/CasesStats';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.scss'],
})
export class FlowchartComponent {
  flowchartObservable: Observable<string>;
  flowchartImage: string = '';
  casesStats: CasesStats = {} as CasesStats;

  loading: Boolean = true;

  constructor(private facade: FlowchartFacade) {
    this.flowchartObservable = this.facade.getImage();

    this.facade.getStats().subscribe((stats: CasesStats) => {
      this.casesStats = stats;
      this.loading = !(this.casesStats && this.flowchartImage);
    });

    this.flowchartObservable.subscribe((image: string) => {
      this.flowchartImage = image;
      this.loading = !(this.casesStats && this.flowchartImage);
    });
  }
}
