import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbyComponent } from './sluzby.component';

describe('SluzbyComponent', () => {
  let component: SluzbyComponent;
  let fixture: ComponentFixture<SluzbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SluzbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
