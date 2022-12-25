import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntarihComponent } from './antarih.component';

describe('AntarihComponent', () => {
  let component: AntarihComponent;
  let fixture: ComponentFixture<AntarihComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntarihComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntarihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
