import { TestBed } from '@angular/core/testing';

import { FlowchartApi } from './flowchart.api';

describe('FlowchartApiService', () => {
  let service: FlowchartApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowchartApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
