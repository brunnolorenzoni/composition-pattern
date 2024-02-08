import { Repository } from '../../bases/Repository';

export class ProjectRepository implements Repository {
  private static instance: ProjectRepository;

  static getUrl: string = 'geturl.com';

  public static getInstance(): ProjectRepository {
    if (!ProjectRepository.instance) {
      ProjectRepository.instance = new ProjectRepository();
    }

    return ProjectRepository.instance;
  }

  async getProject() {
    console.log('Call get');
  }

  async getAllProjects() {
    console.log('Call getAll');
  }
}
