import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Processo } from '../types/Processo';

@Injectable()
export class FlowchartApi {
  constructor(private readonly http: HttpClient) {}

  public getImage() {
    return this.http.get<Processo[]>(`/api/visualization/image/`);
  }
}
