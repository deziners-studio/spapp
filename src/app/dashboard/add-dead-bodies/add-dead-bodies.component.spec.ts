import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeadBodiesComponent } from './add-dead-bodies.component';

describe('AddDeadBodiesComponent', () => {
  let component: AddDeadBodiesComponent;
  let fixture: ComponentFixture<AddDeadBodiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeadBodiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeadBodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
