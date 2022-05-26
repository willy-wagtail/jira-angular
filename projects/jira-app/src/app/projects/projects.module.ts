import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBoardColumnsComponent } from './project-board-columns/project-board-columns.component';
import { ProjectBoardFiltersComponent } from './project-board-filters/project-board-filters.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { ProjectBreadcrumbsComponent } from './project-breadcrumbs/project-breadcrumbs.component';
import { ProjectSidebarComponent } from './project-sidebar/project-sidebar.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectSidebarComponent,
    ProjectBoardComponent,
    ProjectBreadcrumbsComponent,
    ProjectBoardColumnsComponent,
    ProjectBoardFiltersComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
