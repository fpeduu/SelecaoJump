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
  selector: 'app-flowchart-image',
  templateUrl: './flowchart-image.component.html',
  styleUrls: ['./flowchart-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowchartImageComponent implements OnInit, OnChanges {
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

      nodes.each(function (d, i) {
        const node = d3.select(this);
        const nodeTitle = node.select('a').attr('xlink:title');

        const parentPosition = (
          svg.node() as HTMLElement
        ).getBoundingClientRect();
        const nodePosition = (
          node.node() as HTMLElement
        ).getBoundingClientRect();

        const position = {
          x: nodePosition.x,
          y: nodePosition.y,
        };
        const svgNode = infoIcon.cloneNode(true);

        const g = svg.append('g');
        g.node()?.appendChild(svgNode);

        const button = g
          .select('svg')
          .attr('width', '1.2em')
          .attr('x', position.x - 500)
          .attr('y', position.y - 550)
          .node() as HTMLElement;

        button.addEventListener('click', () => {
          openProcessDetails(nodeTitle);
        });
      });
    });
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.image) this.plotImage();
  }
}
