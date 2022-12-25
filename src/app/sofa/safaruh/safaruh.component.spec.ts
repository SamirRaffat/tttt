import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafaruhComponent } from './safaruh.component';

describe('SafaruhComponent', () => {
  let component: SafaruhComponent;
  let fixture: ComponentFixture<SafaruhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafaruhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafaruhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
