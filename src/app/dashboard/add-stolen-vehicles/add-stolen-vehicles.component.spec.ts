import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStolenVehiclesComponent } from './add-stolen-vehicles.component';

describe('AddStolenVehiclesComponent', () => {
  let component: AddStolenVehiclesComponent;
  let fixture: ComponentFixture<AddStolenVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStolenVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStolenVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
