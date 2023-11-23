import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsAndTermsComponent } from './conditions-and-terms.component';

describe('ConditionsAndTermsComponent', () => {
  let component: ConditionsAndTermsComponent;
  let fixture: ComponentFixture<ConditionsAndTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionsAndTermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionsAndTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
