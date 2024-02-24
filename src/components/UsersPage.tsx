import axios from "axios";
import { useEffect, useState } from "react";
import { RequestResponseUserListResponse, User } from "../interfaces";

const API_URL: string = "https://reqres.in/api/users?page=2";

async function loadUsers(): Promise<User[]> {
  /*     fetch(API_URL)
      .then((res) => res.json())
      .then((data) => console.log(data)); */

  try {
    const { data } = await axios.get<RequestResponseUserListResponse>(API_URL);
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers().then((users) => setUsers(users));
  }, []);

  return (
    <>
      <h3>Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  const { avatar, first_name, last_name, email } = user;
  return (
    <tr>
      <td>
        <img style={{ width: "50px" }} src={avatar} alt={first_name} />
      </td>
      <td>{`${first_name} ${last_name}`}</td>
      <td>{email}</td>
    </tr>
  );
};
