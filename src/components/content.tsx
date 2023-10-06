import { User } from "../types";
import { ErrorComponent } from "./error-component";
import { Spinner } from "./spinner";
import { UserList } from "./user-list";

interface ContentProps {
  users: User[];
  error: string;
  isLoading: boolean;
}
export const Content = ({ error, isLoading, users }: ContentProps) => {
  if (error) {
    return <ErrorComponent text={error} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!users.length) {
    return <h2>Users not found</h2>;
  }

  return <UserList users={users} />;
};
