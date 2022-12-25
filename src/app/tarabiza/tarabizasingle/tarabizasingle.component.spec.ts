import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarabizasingleComponent } from './tarabizasingle.component';

describe('TarabizasingleComponent', () => {
  let component: TarabizasingleComponent;
  let fixture: ComponentFixture<TarabizasingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarabizasingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarabizasingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
