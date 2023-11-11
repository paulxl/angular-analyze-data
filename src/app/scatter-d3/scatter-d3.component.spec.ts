import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterD3Component } from './scatter-d3.component';

describe('ScatterD3Component', () => {
  let component: ScatterD3Component;
  let fixture: ComponentFixture<ScatterD3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScatterD3Component]
    });
    fixture = TestBed.createComponent(ScatterD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
