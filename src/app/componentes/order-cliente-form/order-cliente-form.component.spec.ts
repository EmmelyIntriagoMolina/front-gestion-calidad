import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderClienteFormComponent } from './order-cliente-form.component';

describe('OrderClienteFormComponent', () => {
  let component: OrderClienteFormComponent;
  let fixture: ComponentFixture<OrderClienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderClienteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderClienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
