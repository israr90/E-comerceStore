import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShipMethodComponent } from './add-ship-method.component';

describe('AddShipMethodComponent', () => {
  let component: AddShipMethodComponent;
  let fixture: ComponentFixture<AddShipMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShipMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShipMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
