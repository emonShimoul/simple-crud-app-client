const User = ({ user, handleDelete }) => {
  return (
    <tr>
      <th>1</th>
      <td>Cy Ganderton</td>
      <td>{user.email}</td>
      <td className="flex gap-2">
        <button className="btn btn-xs btn-success" onClick={handleDelete}>
          Update
        </button>
        <button className="btn btn-xs btn-error text-white">Delete</button>
      </td>
    </tr>
  );
};

export default User;
