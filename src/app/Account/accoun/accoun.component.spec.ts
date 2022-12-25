import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounComponent } from './accoun.component';

describe('AccounComponent', () => {
  let component: AccounComponent;
  let fixture: ComponentFixture<AccounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccounComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
