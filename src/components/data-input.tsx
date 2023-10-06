import { Dispatch, SetStateAction, ChangeEventHandler } from "react";
import { InputType } from "../const";
import { Query } from "../types";

interface DataInputProps {
  inputType: InputType;
  setFilter: Dispatch<SetStateAction<Query>>;
}

export const DataInput = ({ inputType, setFilter }: DataInputProps) => {
  const type = inputType === InputType.Age ? "number" : "text";

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value } = evt.currentTarget;
    setFilter((prev) => ({
      ...prev,
      [inputType]: value,
      offset: 0
    }));
  };

  return (
    <input
      onChange={handleInputChange}
      type={type}
      placeholder={inputType}
      min={0}
    />
  );
};
