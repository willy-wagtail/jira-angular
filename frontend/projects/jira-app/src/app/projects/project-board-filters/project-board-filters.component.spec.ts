import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBoardFiltersComponent } from './project-board-filters.component';

describe('ProjectBoardFiltersComponent', () => {
  let component: ProjectBoardFiltersComponent;
  let fixture: ComponentFixture<ProjectBoardFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectBoardFiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBoardFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
