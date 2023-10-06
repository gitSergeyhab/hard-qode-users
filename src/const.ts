import { Query } from "./types";

export const enum PageButtonType {
  Prev = "prev",
  Next = "next"
}

export const enum InputType {
  Name = "name",
  Age = "age"
}

export const LIMITS = [2, 4, 8, 16];

export const DEFAUT_USER_FILTER: Query = {
  limit: 4,
  offset: 0,
  age: "",
  name: ""
};
