import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBoardColumnsComponent } from './project-board-columns.component';

describe('ProjectBoardColumnsComponent', () => {
  let component: ProjectBoardColumnsComponent;
  let fixture: ComponentFixture<ProjectBoardColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectBoardColumnsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBoardColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
