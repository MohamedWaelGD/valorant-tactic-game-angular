import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadQuarterComponent } from './head-quarter.component';

describe('HeadQuarterComponent', () => {
  let component: HeadQuarterComponent;
  let fixture: ComponentFixture<HeadQuarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadQuarterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
