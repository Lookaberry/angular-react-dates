import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularReactDatesComponent } from './angular-react-dates.component';

describe('AngularReactDatesComponent', () => {
  let component: AngularReactDatesComponent;
  let fixture: ComponentFixture<AngularReactDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularReactDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularReactDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
