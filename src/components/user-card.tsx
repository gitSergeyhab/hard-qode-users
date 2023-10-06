import { User } from "../types";

interface UserCardProps {
  user: User;
}
export const UserCard = ({ user }: UserCardProps) => {
  const { age, name } = user;

  return (
    <div>
      {name}, {age}
    </div>
  );
};
