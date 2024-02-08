import { Project, ProjectData } from './src/entities/Project/Project';
import { ProjectList } from './src/entities/Project/ProjectList';

const data: ProjectData = {
  id: 1,
  name: 'Project Name',
};

const project = new Project(data);
const id = project.entity.getValue<ProjectData>('id');

console.log({ project, id });

const projectList = new ProjectList();
projectList.entityList.addItem(project);

console.log(projectList.entityList.getItems().items);
console.log(projectList.entityList.pagination.getCurrentPage());

console.log('Is Singleton working?:', projectList.repository === project.repository);

project.repository.getProject();
project.repository.getAllProjects();
