import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDeEntregaComponent } from './punto-de-entrega.component';

describe('PuntoDeEntregaComponent', () => {
  let component: PuntoDeEntregaComponent;
  let fixture: ComponentFixture<PuntoDeEntregaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntoDeEntregaComponent]
    });
    fixture = TestBed.createComponent(PuntoDeEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
