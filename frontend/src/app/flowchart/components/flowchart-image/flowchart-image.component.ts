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

    d3.xml('assets/info-icon.svg').then((data) => {
      const infoIcon = data.documentElement;

      const svg = d3.select(
        this.flowchartContainer.nativeElement.querySelector('svg')
      );

      const nodes = svg.selectAll('.node');

      nodes.each(function () {
        const node = d3.select(this);
        node
          .attr('cursor', 'pointer')
          .on('click', () => openProcessDetails(nodeTitle));

        const nodeText = node.select('text');
        const nodeTitle = node.select('a').attr('xlink:title');

        const nodeTextPosition = {
          x: Number(nodeText.attr('x')),
          y: Number(nodeText.attr('y')),
        };

        const svgNode = infoIcon.cloneNode(true);

        const g = node.append('g');
        g.node()?.appendChild(svgNode);

        const button = g.select('svg').attr('width', '1em');

        const position = {
          x: nodeTextPosition.x + 50,
          y: nodeTextPosition.y - 400,
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
