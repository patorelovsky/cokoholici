import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoskytnuteSluzbyComponent } from './poskytnute-sluzby.component';

describe('PoskytnuteSluzbyComponent', () => {
  let component: PoskytnuteSluzbyComponent;
  let fixture: ComponentFixture<PoskytnuteSluzbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoskytnuteSluzbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoskytnuteSluzbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
