import { Input, Component } from '@angular/core';
import { CasesStats } from '../../types/CasesStats';
import { formatDuration } from '../../utils/formatDuration';

@Component({
  selector: 'app-cases-stats',
  templateUrl: './cases-stats.component.html',
  styleUrls: ['./cases-stats.component.scss'],
})
export class CasesStatsComponent {
  @Input() data: CasesStats = {} as CasesStats;

  formatDuration = formatDuration;
}
