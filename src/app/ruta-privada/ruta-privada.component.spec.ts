import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPrivadaComponent } from './ruta-privada.component';

describe('RutaPrivadaComponent', () => {
  let component: RutaPrivadaComponent;
  let fixture: ComponentFixture<RutaPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPrivadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
