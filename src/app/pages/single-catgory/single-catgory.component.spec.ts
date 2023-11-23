import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCatgoryComponent } from './single-catgory.component';

describe('SingleCatgoryComponent', () => {
  let component: SingleCatgoryComponent;
  let fixture: ComponentFixture<SingleCatgoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCatgoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCatgoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
