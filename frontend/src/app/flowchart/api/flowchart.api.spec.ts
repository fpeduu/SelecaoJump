import { TestBed } from '@angular/core/testing';

import { FlowchartApiService } from './flowchart.api';

describe('AnalysisApiService', () => {
  let service: FlowchartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowchartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
