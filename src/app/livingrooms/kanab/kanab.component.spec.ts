import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanabComponent } from './kanab.component';

describe('KanabComponent', () => {
  let component: KanabComponent;
  let fixture: ComponentFixture<KanabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
