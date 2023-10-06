import { User } from "../types";
import { UserCard } from "./user-card";

interface UserListProps {
  users: User[];
}
export const UserList = ({ users }: UserListProps) => {
  const usersElements = users.map((item) => (
    <li key={item.id}>
      <UserCard user={item} key={item.id} />
    </li>
  ));

  return <ul className="user-list">{usersElements}</ul>;
};
