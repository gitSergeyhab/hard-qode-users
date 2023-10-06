import { useState } from "react";
import { DataInput } from "./components/data-input";
import { Content } from "./components/content";
import { DEFAUT_USER_FILTER, InputType, PageButtonType } from "./const";
import { Pagination } from "./components/pagination";
import { PageNumber } from "./components/page-number";
import { SelectLimit } from "./components/select-limit";
import { PaginationButton } from "./components/pagination-button";
import { useRequestUsers } from "./hooks/use-request-users";
import "./styles.css";

export default function App() {
  const [filter, setFilter] = useState(DEFAUT_USER_FILTER);
  const { users, error, isLoading } = useRequestUsers({ filter });

  return (
    <div className="app">
      <div className="inputs">
        <DataInput inputType={InputType.Name} setFilter={setFilter} />
        <DataInput inputType={InputType.Age} setFilter={setFilter} />
      </div>
      <Content isLoading={isLoading} error={error} users={users} />

      <Pagination>
        <SelectLimit setFilter={setFilter} filter={filter} />
        <PaginationButton
          buttonType={PageButtonType.Prev}
          setFilter={setFilter}
          filter={filter}
          length={users.length}
          isLoading={isLoading}
        />
        <PageNumber filter={filter} />
        <PaginationButton
          buttonType={PageButtonType.Next}
          setFilter={setFilter}
          filter={filter}
          length={users.length}
          isLoading={isLoading}
        />
      </Pagination>
    </div>
  );
}
