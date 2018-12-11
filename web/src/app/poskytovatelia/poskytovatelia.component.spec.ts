import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoskytovateliaComponent } from './poskytovatelia.component';

describe('PoskytovateliaComponent', () => {
  let component: PoskytovateliaComponent;
  let fixture: ComponentFixture<PoskytovateliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoskytovateliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoskytovateliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
