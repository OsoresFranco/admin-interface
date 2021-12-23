import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTravelsComponent } from './current-travels.component';

describe('CurrentTravelsComponent', () => {
  let component: CurrentTravelsComponent;
  let fixture: ComponentFixture<CurrentTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTravelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
