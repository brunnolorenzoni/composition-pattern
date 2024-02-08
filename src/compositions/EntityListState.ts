export enum ViewModeEnum {
  TABLE = 'table',
  CARD = 'card',
  MAP = 'map',
  PRINT = 'print',
}

export class EntityListState {
  protected viewMode: string = ViewModeEnum.TABLE;

  getViewMode(): string {
    return this.viewMode;
  }

  setViewMode(viewMode: ViewModeEnum) {
    this.viewMode = viewMode;
  }
}
