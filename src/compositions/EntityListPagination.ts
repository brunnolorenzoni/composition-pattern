export class EntityListPagination {
  protected currentPage: number = 1;

  getCurrentPage(): number {
    return this.currentPage;
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }
}
