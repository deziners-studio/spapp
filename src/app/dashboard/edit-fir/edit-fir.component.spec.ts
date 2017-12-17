import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFirComponent } from './edit-fir.component';

describe('EditFirComponent', () => {
  let component: EditFirComponent;
  let fixture: ComponentFixture<EditFirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
