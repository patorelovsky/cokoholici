import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClenEditorComponent } from './clen-editor.component';

describe('ClenEditorComponent', () => {
  let component: ClenEditorComponent;
  let fixture: ComponentFixture<ClenEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClenEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClenEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
