import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerOTComponent } from './ver-ot.component';

describe('VerOTComponent', () => {
  let component: VerOTComponent;
  let fixture: ComponentFixture<VerOTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerOTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
