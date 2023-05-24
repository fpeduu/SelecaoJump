import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowchartImageComponent } from './flowchart-image.component';

describe('FlowchartImageComponent', () => {
  let component: FlowchartImageComponent;
  let fixture: ComponentFixture<FlowchartImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlowchartImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlowchartImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
