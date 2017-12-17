import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMissingPersonsComponent } from './add-missing-persons.component';

describe('AddMissingPersonsComponent', () => {
  let component: AddMissingPersonsComponent;
  let fixture: ComponentFixture<AddMissingPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMissingPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMissingPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
