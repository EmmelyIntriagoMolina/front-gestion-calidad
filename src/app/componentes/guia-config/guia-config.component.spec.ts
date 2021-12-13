import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaConfigComponent } from './guia-config.component';

describe('GuiaConfigComponent', () => {
  let component: GuiaConfigComponent;
  let fixture: ComponentFixture<GuiaConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
