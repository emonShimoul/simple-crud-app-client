import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully!!");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h2>Users: {users.length}</h2>
      <div>
        {users.map((user) => (
          <User key={user._id} handleDelete={handleDelete}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
