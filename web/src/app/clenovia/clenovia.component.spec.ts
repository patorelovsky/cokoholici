import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClenoviaComponent } from './clenovia.component';

describe('ClenoviaComponent', () => {
  let component: ClenoviaComponent;
  let fixture: ComponentFixture<ClenoviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClenoviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClenoviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
