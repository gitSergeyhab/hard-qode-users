import { Dispatch, SetStateAction } from "react";
import { PageButtonType } from "../const";
import { Query } from "../types";
import { checkNoMoreData, getOffset, getPageNumber } from "../utils";

interface PaginationButtonProps {
  buttonType: PageButtonType;
  setFilter: Dispatch<SetStateAction<Query>>;
  filter: Query;
  length: number;
  isLoading: boolean;
}
export const PaginationButton = ({
  buttonType,
  setFilter,
  filter,
  length,
  isLoading
}: PaginationButtonProps) => {
  const isButtonDisabled = checkNoMoreData(buttonType, length, filter);
  const handlePageClick = () => {
    const incriment = buttonType === PageButtonType.Next ? 1 : -1;

    const { offset, limit } = filter;
    const page = getPageNumber(offset, limit);

    const newOffset = getOffset(page + incriment, limit);
    setFilter((prev) => ({
      ...prev,
      offset: newOffset
    }));
  };

  return (
    <button
      disabled={isButtonDisabled || isLoading}
      onClick={handlePageClick}
      type="button"
    >
      {buttonType}
    </button>
  );
};
