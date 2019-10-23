import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicebowlComponent } from './ricebowl.component';

describe('RicebowlComponent', () => {
  let component: RicebowlComponent;
  let fixture: ComponentFixture<RicebowlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicebowlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicebowlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
