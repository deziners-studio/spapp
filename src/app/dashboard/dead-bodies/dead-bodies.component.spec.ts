import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadBodiesComponent } from './dead-bodies.component';

describe('DeadBodiesComponent', () => {
  let component: DeadBodiesComponent;
  let fixture: ComponentFixture<DeadBodiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadBodiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadBodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
