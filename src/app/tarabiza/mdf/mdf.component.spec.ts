import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDFComponent } from './mdf.component';

describe('MDFComponent', () => {
  let component: MDFComponent;
  let fixture: ComponentFixture<MDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
