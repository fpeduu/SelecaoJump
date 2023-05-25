import {
  Input,
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import * as d3 from 'd3';

@Component({
  selector: 'app-process-stats',
  templateUrl: './process-stats.component.html',
  styleUrls: ['./process-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessStatsComponent implements OnInit, OnChanges {
  @Input() image: string = '';
  @ViewChild('flowchartContainer', { static: true })
  flowchartContainer: ElementRef = new ElementRef('');

  constructor(private router: Router) {}

  plotImage() {
    const openProcessDetails = (processTitle: string) =>
      this.router.navigate([`/analysis`], {
        queryParams: { movimento: processTitle },
      });

    this.flowchartContainer.nativeElement.innerHTML = this.image;
    d3.xml('../../../../assets/info-icon.svg').then((data) => {
      const infoIcon = data.documentElement;

      const svg = d3.select(
        this.flowchartContainer.nativeElement.querySelector('svg')
      );

      const nodes = svg.selectAll('.node');

      let positions: number[] = [];

      nodes.each(function (d, i) {
        const node = d3.select(this);
        const nodePosition = (
          node.node() as HTMLElement
        ).getBoundingClientRect();

        positions.push(nodePosition.y);
      });

      positions = positions.sort((a, b) => a - b);

      nodes.each(function (d, i) {
        const node = d3.select(this);
        const nodeTitle = node.select('a').attr('xlink:title');

        const parentPosition = (
          svg.node() as HTMLElement
        ).getBoundingClientRect();
        const nodePosition = (
          node.node() as HTMLElement
        ).getBoundingClientRect();

        const nodeIndex = positions.indexOf(nodePosition.y);

        const svgNode = infoIcon.cloneNode(true);

        const g = svg.append('g');
        g.node()?.appendChild(svgNode);

        const button = g
          .select('svg')
          .attr('width', '1em')
          .on('click', () => openProcessDetails(nodeTitle));

        const buttonSize = (
          button.node() as HTMLElement
        ).getBoundingClientRect();

        const position = {
          x: nodePosition.x - parentPosition.x - buttonSize.width / 2 - 50,
          y:
            nodePosition.y -
            parentPosition.y -
            buttonSize.height / 2 -
            375 -
            nodeIndex * 15,
        };

        button.attr('x', position.x).attr('y', position.y);
      });
    });
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.image) this.plotImage();
  }
}
