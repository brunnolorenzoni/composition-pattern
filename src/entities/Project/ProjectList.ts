import { EntityList } from '../../products/EntityList';
import { Project } from './Project';
import { ProjectRepository } from './ProjectRepository';

export class ProjectList {
  public entityList: EntityList<Project>;
  public repository: ProjectRepository = ProjectRepository.getInstance();

  constructor() {
    this.entityList = new EntityList<Project>();
  }
}
