import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPoskytovatelComponent } from './report-poskytovatel.component';

describe('ReportPoskytovatelComponent', () => {
  let component: ReportPoskytovatelComponent;
  let fixture: ComponentFixture<ReportPoskytovatelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPoskytovatelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPoskytovatelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
