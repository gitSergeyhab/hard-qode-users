import { LIMITS } from "../const";
import { OptionLimit } from "./option-limit";
import { Dispatch, SetStateAction, ChangeEventHandler } from "react";
import { Query } from "../types";

interface SelectLimitProps {
  setFilter: Dispatch<SetStateAction<Query>>;
  filter: Query;
}

export const SelectLimit = ({ setFilter, filter }: SelectLimitProps) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (evt) => {
    const { value } = evt.currentTarget;
    setFilter((prev) => ({ ...prev, limit: +value, offset: 0 }));
  };

  const options = LIMITS.map((item) => <OptionLimit value={item} key={item} />);

  return (
    <label htmlFor="select-limit">
      By page:
      <select
        value={filter.limit}
        name="select-limit"
        id="select-limit"
        onChange={handleChange}
      >
        {options}
      </select>
    </label>
  );
};
