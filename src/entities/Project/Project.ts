import { Entity } from '../../products/Entity';
import { ProjectRepository } from './ProjectRepository';

export type ProjectData = {
  id: number;
  name: string;
};

export class Project {
  public entity: Entity;
  public repository: ProjectRepository = ProjectRepository.getInstance();

  constructor(data: ProjectData) {
    this.entity = new Entity(data, this.repository);
  }
}
