import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingOnlineComponent } from './marketing-online.component';

describe('MarketingOnlineComponent', () => {
  let component: MarketingOnlineComponent;
  let fixture: ComponentFixture<MarketingOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
