import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloMedidaComponent } from './desarrollo-medida.component';

describe('DesarrolloMedidaComponent', () => {
  let component: DesarrolloMedidaComponent;
  let fixture: ComponentFixture<DesarrolloMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrolloMedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
