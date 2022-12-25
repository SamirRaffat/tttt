import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayingoffComponent } from './payingoff.component';

describe('PayingoffComponent', () => {
  let component: PayingoffComponent;
  let fixture: ComponentFixture<PayingoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayingoffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayingoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
