import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FlowchartApi {
  constructor(private readonly http: HttpClient) {}

  public getImage() {
    return this.http.get<any>(`/api/visualization/image/`, {
      responseType: 'text' as 'json',
    });
  }
}
