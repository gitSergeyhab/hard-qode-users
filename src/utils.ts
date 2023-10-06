import { PageButtonType } from "./const";
import { Query } from "./types";

export const getOffset = (page: number, limit: number) => {
  return limit * (page - 1);
};

export const getPageNumber = (offset: number, limit: number) => {
  return Math.floor(offset / limit) + 1;
};

export const checkNoMoreData = (
  buttonType: PageButtonType,
  length: number,
  query: Query
) => {
  const { offset, limit } = query;
  const pageNumber = getPageNumber(offset, limit);
  if (buttonType === PageButtonType.Prev) {
    return pageNumber < 2;
  }
  // у api нет возможности посмотреть общее количество юзеров,
  // так что если (user.length % limit) на последней page отрабатывать не будет
  return length < limit;
};
