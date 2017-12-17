import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccidentInformationComponent } from './add-accident-information.component';

describe('AddAccidentInformationComponent', () => {
  let component: AddAccidentInformationComponent;
  let fixture: ComponentFixture<AddAccidentInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccidentInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccidentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
