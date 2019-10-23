import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chicken1Component } from './chicken1.component';

describe('Chicken1Component', () => {
  let component: Chicken1Component;
  let fixture: ComponentFixture<Chicken1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chicken1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chicken1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
