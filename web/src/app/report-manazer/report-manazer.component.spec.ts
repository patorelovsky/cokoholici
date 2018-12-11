import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportManazerComponent } from './report-manazer.component';

describe('ReportManazerComponent', () => {
  let component: ReportManazerComponent;
  let fixture: ComponentFixture<ReportManazerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportManazerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportManazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
