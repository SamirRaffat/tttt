import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglelivingroomsComponent } from './singlelivingrooms.component';

describe('SinglelivingroomsComponent', () => {
  let component: SinglelivingroomsComponent;
  let fixture: ComponentFixture<SinglelivingroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglelivingroomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglelivingroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
