import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashGuardComponent } from './cash-guard.component';

describe('CashGuardComponent', () => {
  let component: CashGuardComponent;
  let fixture: ComponentFixture<CashGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
