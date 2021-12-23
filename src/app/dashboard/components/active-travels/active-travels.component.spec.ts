import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTravelsComponent } from './active-travels.component';

describe('ActiveTravelsComponent', () => {
  let component: ActiveTravelsComponent;
  let fixture: ComponentFixture<ActiveTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveTravelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
