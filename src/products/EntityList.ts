import Collection from '../bases/Collection';
import { EntityListPagination } from '../compositions/EntityListPagination';
import { EntityListState } from '../compositions/EntityListState';

export class EntityList<T> {
  protected items: Collection<T> = new Collection<T>();
  public state: EntityListState = new EntityListState();
  public pagination: EntityListPagination = new EntityListPagination();

  constructor() {}

  public addItem(item: T): void {
    this.items.put(item);
  }

  public setItems(items: Array<T>): void {
    this.items = new Collection(items);
  }

  public getItems(): Collection<T> {
    return this.items;
  }
}
