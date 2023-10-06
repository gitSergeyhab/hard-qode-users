import { getPageNumber } from "../utils";
import { Query } from "../types";

interface PageNumberProps {
  filter: Query;
}

export const PageNumber = ({ filter }: PageNumberProps) => {
  const { limit, offset } = filter;

  const pageNumber = getPageNumber(offset, limit);

  return <div>page: {pageNumber}</div>;
};
