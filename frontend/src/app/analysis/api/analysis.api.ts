import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Case } from '../types/Case';
import { of } from 'rxjs';

@Injectable()
export class AnalysisApi {
  constructor(private readonly http: HttpClient) {}

  public fetchProcessosData() {
    return this.http.get<Case[]>(`/api/processos/`);
  }

  public fetchProcessosDataByName(name: string) {
    return this.http.get<Case[]>(`/api/processos/${name}`);
  }
}
