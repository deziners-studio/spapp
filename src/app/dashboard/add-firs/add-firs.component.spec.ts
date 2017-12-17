import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFirsComponent } from './add-firs.component';

describe('AddFirsComponent', () => {
  let component: AddFirsComponent;
  let fixture: ComponentFixture<AddFirsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFirsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
