import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlowchartSizeService } from '../../services/flowchart-switch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private readonly router: Router,
    private readonly flowchartSizeService: FlowchartSizeService
  ) {}

  switchFlowchartSize() {
    this.flowchartSizeService.switchFlowchartSize();

    window.location.reload();
  }

  isFlowchartBig() {
    return this.flowchartSizeService.isFlowchartBig();
  }
}
