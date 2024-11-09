import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfangdevsComponent } from './wolfangdevs.component';

describe('WolfangdevsComponent', () => {
  let component: WolfangdevsComponent;
  let fixture: ComponentFixture<WolfangdevsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WolfangdevsComponent]
    });
    fixture = TestBed.createComponent(WolfangdevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
