import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryExperienceComponent } from './category-experience.component';

describe('SubCategoryExperienceComponent', () => {
  let component: CategoryExperienceComponent;
  let fixture: ComponentFixture<CategoryExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
