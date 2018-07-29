import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollInSectionComponent } from './enroll-in-section.component';

describe('EnrollInSectionComponent', () => {
  let component: EnrollInSectionComponent;
  let fixture: ComponentFixture<EnrollInSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollInSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollInSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
