import { ReactNode } from "react";

export const Pagination = ({ children }: { children: ReactNode }) => {
  return <div className="pagination">{children}</div>;
};
