import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleExperienceSectionComponent } from './title-experience-section.component';

describe('TitleExperienceSectionComponent', () => {
  let component: TitleExperienceSectionComponent;
  let fixture: ComponentFixture<TitleExperienceSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleExperienceSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleExperienceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
