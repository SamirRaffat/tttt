import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesofaComponent } from './singlesofa.component';

describe('SinglesofaComponent', () => {
  let component: SinglesofaComponent;
  let fixture: ComponentFixture<SinglesofaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglesofaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglesofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
