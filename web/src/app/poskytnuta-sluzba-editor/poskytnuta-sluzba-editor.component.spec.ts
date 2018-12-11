import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoskytnutaSluzbaEditorComponent } from './poskytnuta-sluzba-editor.component';

describe('PoskytnutaSluzbaEditorComponent', () => {
  let component: PoskytnutaSluzbaEditorComponent;
  let fixture: ComponentFixture<PoskytnutaSluzbaEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoskytnutaSluzbaEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoskytnutaSluzbaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
