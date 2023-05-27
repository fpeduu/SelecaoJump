import { Injectable } from '@angular/core';
import { Case } from '../../types/Case';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AnalysisState {
  private readonly processoData = new BehaviorSubject([] as Case[]);

  public getProcessoData() {
    return this.processoData.asObservable();
  }

  public setProcessoData(processoData: Case[]) {
    this.processoData.next(processoData);
  }
}
