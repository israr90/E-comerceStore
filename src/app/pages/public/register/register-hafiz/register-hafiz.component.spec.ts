import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHafizComponent } from './register-hafiz.component';

describe('RegisterHafizComponent', () => {
  let component: RegisterHafizComponent;
  let fixture: ComponentFixture<RegisterHafizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHafizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHafizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
