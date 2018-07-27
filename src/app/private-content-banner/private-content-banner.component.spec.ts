import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateContentBannerComponent } from './private-content-banner.component';

describe('PrivateContentBannerComponent', () => {
  let component: PrivateContentBannerComponent;
  let fixture: ComponentFixture<PrivateContentBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateContentBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateContentBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
