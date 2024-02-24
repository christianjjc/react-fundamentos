import { useEffect, useRef, useState } from "react";
import type { RequestResponseUserListResponse, User } from "../interfaces";
import axios from "axios";

const API_URL: string = "https://reqres.in/api/users";

async function loadUsers(page: number = 1): Promise<User[]> {
  /*     fetch(API_URL)
      .then((res) => res.json())
      .then((data) => console.log(data)); */
  try {
    const { data } = await axios.get<RequestResponseUserListResponse>(API_URL, {
      params: {
        page: page,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsers(currentPageRef.current).then((users) => setUsers(users));
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);
    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;
    currentPageRef.current--;
    const users = await loadUsers(currentPageRef.current);
    setUsers(users);
  };

  return {
    // Properties
    users,

    // Methods
    prevPage,
    nextPage,
  };
};
