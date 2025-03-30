const User = (user) => {
  console.log(user.user);

  return (
    <tr>
      <th>1</th>
      <td>Cy Ganderton</td>
      <td>{user.user.email}</td>
      <td className="flex gap-2">
        <button className="btn btn-xs btn-warning text-white">Update</button>
        <button className="btn btn-xs btn-error text-white">Delete</button>
      </td>
    </tr>
  );
};

export default User;
