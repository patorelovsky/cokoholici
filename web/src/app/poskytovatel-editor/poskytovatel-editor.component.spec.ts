import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoskytovatelEditorComponent } from './poskytovatel-editor.component';

describe('PoskytovatelEditorComponent', () => {
  let component: PoskytovatelEditorComponent;
  let fixture: ComponentFixture<PoskytovatelEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoskytovatelEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoskytovatelEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
