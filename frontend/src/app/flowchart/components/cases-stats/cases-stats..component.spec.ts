import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesStatsComponent } from './cases-stats.component';

describe('FlowchartImageComponent', () => {
  let component: CasesStatsComponent;
  let fixture: ComponentFixture<CasesStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasesStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CasesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
