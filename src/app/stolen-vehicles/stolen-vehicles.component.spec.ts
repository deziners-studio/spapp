import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StolenVehiclesComponent } from './stolen-vehicles.component';

describe('StolenVehiclesComponent', () => {
  let component: StolenVehiclesComponent;
  let fixture: ComponentFixture<StolenVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StolenVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StolenVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
