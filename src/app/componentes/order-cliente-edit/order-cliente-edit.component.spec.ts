import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderClienteEditComponent } from './order-cliente-edit.component';

describe('OrderClienteEditComponent', () => {
  let component: OrderClienteEditComponent;
  let fixture: ComponentFixture<OrderClienteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderClienteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderClienteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
