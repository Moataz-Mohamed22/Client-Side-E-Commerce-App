export interface IPagination<T> {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  data: T[];
}
