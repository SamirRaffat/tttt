import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteeleComponent } from './steele.component';

describe('SteeleComponent', () => {
  let component: SteeleComponent;
  let fixture: ComponentFixture<SteeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteeleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
