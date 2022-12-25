import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhouseComponent } from './ahouse.component';

describe('AhouseComponent', () => {
  let component: AhouseComponent;
  let fixture: ComponentFixture<AhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
