import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtakeawayComponent } from './ctakeaway.component';

describe('CtakeawayComponent', () => {
  let component: CtakeawayComponent;
  let fixture: ComponentFixture<CtakeawayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtakeawayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtakeawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
