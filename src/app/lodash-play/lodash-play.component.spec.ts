import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodashPlayComponent } from './lodash-play.component';

describe('LodashPlayComponent', () => {
  let component: LodashPlayComponent;
  let fixture: ComponentFixture<LodashPlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LodashPlayComponent]
    });
    fixture = TestBed.createComponent(LodashPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
