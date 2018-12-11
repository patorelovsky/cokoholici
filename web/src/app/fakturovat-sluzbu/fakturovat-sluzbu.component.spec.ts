import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakturovatSluzbuComponent } from './fakturovat-sluzbu.component';

describe('FakturovatSluzbuComponent', () => {
  let component: FakturovatSluzbuComponent;
  let fixture: ComponentFixture<FakturovatSluzbuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakturovatSluzbuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakturovatSluzbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
