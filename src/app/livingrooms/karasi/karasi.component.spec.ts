import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarasiComponent } from './karasi.component';

describe('KarasiComponent', () => {
  let component: KarasiComponent;
  let fixture: ComponentFixture<KarasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarasiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
