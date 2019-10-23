import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddennavComponent } from './hiddennav.component';

describe('HiddennavComponent', () => {
  let component: HiddennavComponent;
  let fixture: ComponentFixture<HiddennavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddennavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddennavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
