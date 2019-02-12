import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NudgeComponent } from './nudge.component';

describe('NudgeComponent', () => {
  let component: NudgeComponent;
  let fixture: ComponentFixture<NudgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NudgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
