import { Module } from '../modules/Module';
import { Repository } from '../bases/Repository';

export class Entity {
  private repository: Repository;
  private modules: Record<string, Module>;
  private store: any;
  protected data: any;

  constructor(data: any, repository: Repository) {
    this.data = data;
    this.repository = repository;
  }

  public getValue<D>(key: keyof D, def = null): any | null {
    const keyx = key as string;
    return this.data?.[keyx] ?? def;
  }
}
