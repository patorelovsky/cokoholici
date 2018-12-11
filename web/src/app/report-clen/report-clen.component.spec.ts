import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClenComponent } from './report-clen.component';

describe('ReportClenComponent', () => {
  let component: ReportClenComponent;
  let fixture: ComponentFixture<ReportClenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportClenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportClenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
