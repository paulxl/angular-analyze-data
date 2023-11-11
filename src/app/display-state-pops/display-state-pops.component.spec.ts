import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStatePopsComponent } from './display-state-pops.component';

describe('DisplayStatePopsComponent', () => {
  let component: DisplayStatePopsComponent;
  let fixture: ComponentFixture<DisplayStatePopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayStatePopsComponent]
    });
    fixture = TestBed.createComponent(DisplayStatePopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
