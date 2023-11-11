import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieD3Component } from './pie-d3.component';

describe('PieD3Component', () => {
  let component: PieD3Component;
  let fixture: ComponentFixture<PieD3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieD3Component]
    });
    fixture = TestBed.createComponent(PieD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
