import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomnessComponent } from './randomness.component';

describe('RandomnessComponent', () => {
  let component: RandomnessComponent;
  let fixture: ComponentFixture<RandomnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomnessComponent]
    });
    fixture = TestBed.createComponent(RandomnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
