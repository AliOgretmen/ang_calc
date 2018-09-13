import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcFieldComponent } from './calc-field.component';

describe('CalcFieldComponent', () => {
  let component: CalcFieldComponent;
  let fixture: ComponentFixture<CalcFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
