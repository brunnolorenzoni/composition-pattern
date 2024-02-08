export default class Collection<T> {
  public readonly items: Array<T>;

  public constructor(initial?: Iterable<T>) {
    this.items = (initial && [...initial]) || [];
  }

  public put(item: T) {
    this.items.push(item);
  }

  public putMany(items: Array<T>) {
    this.items.push(...items);
  }

  public remove(item: T) {
    const index = this.items.indexOf(item);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  public removeMany(items: Array<T>) {
    for (const item of items) {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  }

  public has<K extends keyof T>(key: K, value: T[K]) {
    return this.where(key, value).length > 0;
  }

  public findOne<K extends keyof T>(key: K, value: T[K]): T | undefined {
    return this.where(key, value)[0];
  }

  public where<K extends keyof T>(key: K, value: T[K] | T[K][]) {
    if (Array.isArray(value)) {
      return this.items.filter((item) => {
        return value.includes(item[key]);
      });
    }

    return this.items.filter((item) => {
      return item[key] === value;
    });
  }

  public whereNot<K extends keyof T>(key: K, value: T[K] | T[K][]) {
    if (Array.isArray(value)) {
      return this.items.filter((item) => {
        return !value.includes(item[key]);
      });
    }

    return this.items.filter((item) => {
      return item[key] !== value;
    });
  }

  public partition<K extends keyof T>(key: K, value: T[K] | T[K][]): [T[], T[]] {
    return [this.where(key, value), this.whereNot(key, value)];
  }

  public merge(target: { with: Iterable<T> }) {
    return new Collection([...this.items, ...target.with]);
  }

  public toArray() {
    return this.items;
  }

  public get length() {
    return this.items.length;
  }

  public toSet() {
    return new Set([...this.items]);
  }

  public toMap() {
    return new Map<number, T>(this.items.map((item, index) => [index, item]));
  }
}
