import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbaEditorComponent } from './sluzba-editor.component';

describe('SluzbaEditorComponent', () => {
  let component: SluzbaEditorComponent;
  let fixture: ComponentFixture<SluzbaEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SluzbaEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SluzbaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
