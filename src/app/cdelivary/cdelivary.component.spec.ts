import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdelivaryComponent } from './cdelivary.component';

describe('CdelivaryComponent', () => {
  let component: CdelivaryComponent;
  let fixture: ComponentFixture<CdelivaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdelivaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdelivaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
