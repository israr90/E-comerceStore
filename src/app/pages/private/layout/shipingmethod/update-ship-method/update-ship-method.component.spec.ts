import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShipMethodComponent } from './update-ship-method.component';

describe('UpdateShipMethodComponent', () => {
  let component: UpdateShipMethodComponent;
  let fixture: ComponentFixture<UpdateShipMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateShipMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShipMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
