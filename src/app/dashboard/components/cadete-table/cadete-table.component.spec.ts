import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeteTableComponent } from './cadete-table.component';

describe('CadeteTableComponent', () => {
  let component: CadeteTableComponent;
  let fixture: ComponentFixture<CadeteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadeteTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
