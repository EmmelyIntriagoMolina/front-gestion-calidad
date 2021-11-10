import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderClienteListComponent } from './order-cliente-list.component';

describe('OrderClienteListComponent', () => {
  let component: OrderClienteListComponent;
  let fixture: ComponentFixture<OrderClienteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderClienteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderClienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
