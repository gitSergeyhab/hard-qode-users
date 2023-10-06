export interface User {
  name: string;
  id: number;
  age: number;
}

export interface Query {
  name: string;
  age: string;
  limit: number;
  offset: number;
}
