import {
  Input,
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  OnInit,
  OnChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Case } from '../../types/Case';
import { MatPaginator } from '@angular/material/paginator';
import { formatDuration } from '../../utils/formatDuration';

@Component({
  selector: 'app-analysis-table',
  templateUrl: './analysis-table.component.html',
  styleUrls: ['./analysis-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalysisTableComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input() data: readonly Case[] = [];
  @Input() displayedColumns: string[] = [
    'NPU',
    'movimentos',
    'totalMovimentos',
    'duration',
  ];

  formatDuration = formatDuration;

  dataSource!: MatTableDataSource<Case>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    const data = Object.assign([], this.data);
    this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    // TODO: Fix paginator
    // TODO: Sort not working on movimentos/totalMovimentos
  }

  ngOnChanges(): void {
    const data = Object.assign([], this.data);
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
  }
}
