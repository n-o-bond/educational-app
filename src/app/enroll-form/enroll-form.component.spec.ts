import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollFormComponent } from './enroll-form.component';

describe('EnrollFormComponent', () => {
  let component: EnrollFormComponent;
  let fixture: ComponentFixture<EnrollFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollFormComponent]
    });
    fixture = TestBed.createComponent(EnrollFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
