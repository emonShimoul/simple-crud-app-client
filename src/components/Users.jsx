import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    console.log("Deleted ID: ", id);
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <User key={idx} user={user} handleDelete={handleDelete}></User>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
