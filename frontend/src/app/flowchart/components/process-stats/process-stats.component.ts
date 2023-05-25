import {
  Input,
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ProcessoStats } from '../../types/ProcessoStats';

@Component({
  selector: 'app-process-stats',
  templateUrl: './process-stats.component.html',
  styleUrls: ['./process-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessStatsComponent {
  @Input() data: ProcessoStats = {} as ProcessoStats;
}
