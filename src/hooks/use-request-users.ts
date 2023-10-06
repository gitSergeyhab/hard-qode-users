import { useEffect, useState } from "react";
import { Query, User } from "../types";
import { requestUsers /*, requestUsersWithError */ } from "../api";

export const useRequestUsers = ({ filter }: { filter: Query }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    requestUsers(filter)
      .then((data) => {
        setUsers(data);
        setError("");
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [filter]);

  return { users, error, isLoading };
};
