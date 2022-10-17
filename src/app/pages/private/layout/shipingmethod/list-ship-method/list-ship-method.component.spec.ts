import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShipMethodComponent } from './list-ship-method.component';

describe('ListShipMethodComponent', () => {
  let component: ListShipMethodComponent;
  let fixture: ComponentFixture<ListShipMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShipMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShipMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
