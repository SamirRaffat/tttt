import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShazlunjComponent } from './shazlunj.component';

describe('ShazlunjComponent', () => {
  let component: ShazlunjComponent;
  let fixture: ComponentFixture<ShazlunjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShazlunjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShazlunjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
