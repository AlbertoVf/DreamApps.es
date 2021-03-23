import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareGestionComponent } from './software-gestion.component';

describe('SoftwareGestionComponent', () => {
  let component: SoftwareGestionComponent;
  let fixture: ComponentFixture<SoftwareGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
