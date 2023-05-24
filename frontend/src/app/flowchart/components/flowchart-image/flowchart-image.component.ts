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

  constructor() {}

  ngOnInit(): void {
    console.log(this.image);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.flowchartContainer.nativeElement.innerHTML = this.image;
  }
}
