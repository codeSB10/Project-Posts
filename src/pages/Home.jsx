import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../components/User";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="user-list">
          {users.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
