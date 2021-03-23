import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosInformaticosComponent } from './servicios-informaticos.component';

describe('ServiciosInformaticosComponent', () => {
  let component: ServiciosInformaticosComponent;
  let fixture: ComponentFixture<ServiciosInformaticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosInformaticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosInformaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
