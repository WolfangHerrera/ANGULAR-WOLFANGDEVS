import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RRComponent } from './rr.component';

describe('RRComponent', () => {
  let component: RRComponent;
  let fixture: ComponentFixture<RRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RRComponent]
    });
    fixture = TestBed.createComponent(RRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
