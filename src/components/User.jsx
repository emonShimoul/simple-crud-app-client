const User = ({ user, handleDelete }) => {
  //   console.log(user);

  return (
    <tr>
      <th>1</th>
      <td>Cy Ganderton</td>
      <td>{user.email}</td>
      <td className="flex gap-2">
        <button className="btn btn-xs btn-success">Update</button>
        <button
          className="btn btn-xs btn-error text-white"
          onClick={() => handleDelete(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
