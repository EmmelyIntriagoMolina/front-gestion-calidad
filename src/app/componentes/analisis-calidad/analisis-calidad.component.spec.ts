import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisCalidadComponent } from './analisis-calidad.component';

describe('AnalisisCalidadComponent', () => {
  let component: AnalisisCalidadComponent;
  let fixture: ComponentFixture<AnalisisCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisisCalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
